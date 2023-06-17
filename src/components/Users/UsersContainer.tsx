import React from 'react';
import {UserPageType} from '../../appTypes/types';
import { AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {Users} from './Users';
import {Preloader} from '../UI/Preloader/Preloader';
import {usersAPI} from '../../api/api';
import {
    getUsersTC as getUsers,
    usersActions,
} from '../../redux/userReducer';

type MapStatePropsType = {
    users: Array<UserPageType>;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean;
    followingInProgress: Array<number>;
};
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    };
};

type UsersPropsType = MapStatePropsType & MapDispatchToProps;

type GetUsersType = {
    getUsers:(currentPage: number, pageSize: number)=>void
}

type MapDispatchToProps = typeof usersActions & GetUsersType

class UsersAPI extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        /*this.props.toggleIsFetching(true);

        usersAPI
            .getUsers(this.props.currentPage, this.props.pageSize)
            .then((data) => {
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
                this.props.toggleIsFetching(false);
            });*/
    }

    onPageChange = (pageNum: number) => {
        this.props.setCurrentPage(pageNum);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNum, this.props.pageSize).then((data) => {
            this.props.setUsers(data.items);
            this.props.toggleIsFetching(false);
        });
    };

    render() {
        const {
            setUsers,
            setCurrentPage,
            setTotalUsersCount,
            isFetching,
            ...restProps
        } = this.props;
        return (
            <>
                {isFetching ? (
                    <Preloader />
                ) : (
                    <Users {...restProps} onPageChange={this.onPageChange} />
                )}
            </>
        );
    }
}

export const UsersContainer = connect<
    MapStatePropsType,
    MapDispatchToProps,
    {},
    AppStateType
>(
    mapStateToProps,
    {...usersActions, getUsers}
)(UsersAPI);
