import React from 'react';
import {UserPageType} from '../../appTypes/types';
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {Users} from './Users';
import {Dispatch} from 'redux';
import {followUserAC, setUserAC, unfollowUserAC} from '../../redux/userReducer';

type MapStatePropsType = {
    users: Array<UserPageType>
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}

type MapDispatchPropsType = {
    followUser: (userID: number) => void
    unfollowUser: (userID: number) => void
    setUsers: (users: Array<UserPageType>) => void
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
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);