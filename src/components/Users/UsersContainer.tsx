import React from 'react';
import {UserPageType} from '../../appTypes/types';
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {usersActions} from '../../redux/userReducer';
import axios from 'axios';
import {Users} from './Users';
import s from './Users.module.css';
import {Preloader} from '../UI/Preloader/Preloader';


/*type UsersPropsType = {
    users: Array<UserPageType>;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean,
    followUser: (userID: number) => void;
    unfollowUser: (userID: number) => void;
    setUsers: (users: Array<UserPageType>) => void;
    setCurrentPage: (pageID: number) => void;
    setTotalUsersCount: (count: number) => void;
};*/
type MapStatePropsType = {
    users: Array<UserPageType>;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean
};
type MapDispatchPropsType = {
    followUser: (userID: number) => void;
    unfollowUser: (userID: number) => void;
    setUsers: (users: Array<UserPageType>) => void;
    setCurrentPage: (pageID: number) => void;
    setTotalUsersCount: (count: number) => void;
    toggleIsFetching: (isFetching: boolean) => void
};
type UsersPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    };
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        followUser: (userID: number) => {
            dispatch(usersActions.followUserAC(userID));
        },
        unfollowUser: (userID: number) => {
            dispatch(usersActions.unfollowUserAC(userID));
        },
        setUsers: (users) => {
            dispatch(usersActions.setUserAC(users));
        },
        setCurrentPage: (pageID: number) => {
            dispatch(usersActions.setCurrentPageAC(pageID));
        },
        setTotalUsersCount: (count: number) => {
            dispatch(usersActions.setTotalUsersCountAC(count));
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(usersActions.toggleIsFetching(isFetching))
        }
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
    mapDispatchToProps
)(UsersAPI);
