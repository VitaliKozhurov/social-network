import React from 'react';
import {UserPageType} from '../../appTypes/types';
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {usersActions} from '../../redux/userReducer';
import axios from 'axios';
import {Users} from './Users';

type UsersPropsType = {
    users: Array<UserPageType>;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    followUser: (userID: number) => void;
    unfollowUser: (userID: number) => void;
    setUsers: (users: Array<UserPageType>) => void;
    setCurrentPage: (pageID: number) => void;
    setTotalUsersCount: (count: number) => void;
};
type MapStatePropsType = {
    users: Array<UserPageType>;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
};
type MapDispatchPropsType = {
    followUser: (userID: number) => void;
    unfollowUser: (userID: number) => void;
    setUsers: (users: Array<UserPageType>) => void;
    setCurrentPage: (pageID: number) => void;
    setTotalUsersCount: (count: number) => void;
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
    };
};

class UsersAPI extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChange = (pageNum: number) => {
        this.props.setCurrentPage(pageNum);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`
            )
            .then((response) => this.props.setUsers(response.data.items));
    };

    render() {
        const {setUsers, setCurrentPage, setTotalUsersCount, ...restProps} = this.props;
        return (
            <Users {...restProps} onPageChange={this.onPageChange} />
        );
    }
}

export const UsersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersAPI);
