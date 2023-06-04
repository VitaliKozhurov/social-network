import React from 'react';
import {UserPageType} from '../../appTypes/types';
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {usersActions} from '../../redux/userReducer';
import axios from 'axios';
import {Users} from './Users';
import {Preloader} from '../UI/Preloader/Preloader';

type MapStatePropsType = {
    users: Array<UserPageType>;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean
};

type UsersPropsType = MapStatePropsType & typeof usersActions;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    };
};

class UsersAPI extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.toggleIsFetching(false)
            });
    }

    onPageChange = (pageNum: number) => {
        this.props.setCurrentPage(pageNum);
        this.props.toggleIsFetching(true)
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetching(false);
            });
    };

    render() {

        const {setUsers, setCurrentPage, setTotalUsersCount, isFetching, ...restProps} = this.props;
        return (
            <>
                {isFetching
                    ? <Preloader />
                    : <Users {...restProps} onPageChange={this.onPageChange} />
                }
            </>
        );
    }
}

export const UsersContainer = connect(
    mapStateToProps,
    {...usersActions}
)(UsersAPI);
