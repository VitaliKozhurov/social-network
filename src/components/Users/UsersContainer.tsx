import React from "react";
import { UserPageType } from "../../appTypes/types";
import { AppStateType } from "../../redux/redux-store";
import { connect } from "react-redux";
import { Users } from "./Users";
import { Preloader } from "../UI/Preloader/Preloader";
import { usersAPI } from "../../api/api";
import { Dispatch } from "redux";
import {
    changeFollowingStatusAC,
    followUserAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowUserAC,
} from "../../redux/userReducer";

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

type MapDispatchToPropsType = {
    followUser: (userID: number) => void;
    unfollowUser: (userID: number) => void;
    setUsers: (newUsers: Array<UserPageType>) => void;
    setCurrentPage: (pageID: number) => void;
    setTotalUsersCount: (count: number) => void;
    toggleIsFetching: (value: boolean) => void;
    changeFollowingStatus: (
        fetchFollow: boolean,
        idFollowingUser: number
    ) => void;
    /* getUsers:()=> */
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
    followUser: (userID: number) => dispatch(followUserAC(userID)),
    unfollowUser: (userID: number) => dispatch(unfollowUserAC(userID)),
    setUsers: (newUsers: Array<UserPageType>) => dispatch(setUsersAC(newUsers)),
    setCurrentPage: (pageID: number) => dispatch(setCurrentPageAC(pageID)),
    setTotalUsersCount: (count: number) =>
        dispatch(setTotalUsersCountAC(count)),
    toggleIsFetching: (value: boolean) => dispatch(toggleIsFetchingAC(value)),
    changeFollowingStatus: (fetchFollow: boolean, idFollowingUser: number) =>
        dispatch(changeFollowingStatusAC(fetchFollow, idFollowingUser)),
    /*  getUsers:()=> */
});

type UsersPropsType = MapStatePropsType & MapDispatchToPropsType;

class UsersAPI extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true);

        usersAPI
            .getUsers(this.props.currentPage, this.props.pageSize)
            .then((data) => {
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
                this.props.toggleIsFetching(false);
            });
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
    MapDispatchToPropsType,
    {},
    AppStateType
>(
    mapStateToProps,
    mapDispatchToProps
)(UsersAPI);
