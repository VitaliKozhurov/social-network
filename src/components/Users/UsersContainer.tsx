import React from "react";
import { UserPageType } from "../../appTypes/types";
import { AppStateType } from "../../redux/redux-store";
import { connect } from "react-redux";
import { Users } from "./Users";
import { Dispatch } from "redux";
import { usersActions } from "../../redux/userReducer";

type MapStatePropsType = {
    users: Array<UserPageType>;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    };
};

type MapDispatchPropsType = {
    followUser: (userID: number) => void;
    unfollowUser: (userID: number) => void;
    setUsers: (users: Array<UserPageType>) => void;
    setCurrentPage: (pageID: number) => void;
    setTotalUsersCount: (count: number) => void;
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

export const UsersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);
