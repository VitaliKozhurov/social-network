import React from 'react';
import {UserPageType} from '../../appTypes/types';
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {Users} from './Users';
import {Dispatch} from 'redux';
import {followUserAC, setCurrentPageAC, setTotalUsersCountAC, setUserAC, unfollowUserAC} from '../../redux/userReducer';

type MapStatePropsType = {
    users: Array<UserPageType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

type MapDispatchPropsType = {
    followUser: (userID: number) => void
    unfollowUser: (userID: number) => void
    setUsers: (users: Array<UserPageType>) => void
    setCurrentPage: (pageID: number) => void
    setTotalUsersCount: (count: number) => void
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        followUser: (userID: number) => {
            dispatch(followUserAC(userID))
        },
        unfollowUser: (userID: number) => {
            dispatch(unfollowUserAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUserAC(users))
        },
        setCurrentPage: (pageID: number) => {
            dispatch(setCurrentPageAC(pageID))
        },
        setTotalUsersCount:(count:number)=>{
            dispatch(setTotalUsersCountAC(count))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);