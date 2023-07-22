import React, {ComponentType} from 'react';
import {UserPageType} from 'appTypes/types';
import {AppStateType} from 'redux/redux-store';
import {connect} from 'react-redux';
import {Users} from './Users';
import {Preloader} from '../UI/Preloader/Preloader';
import {
    followUserTC,
    getUsersTC, unFollowUserTC,
    usersActions,
} from 'redux/userReducer';
import {withAuthRedirect} from 'hoc/withAuthRedirect';
import {compose} from 'redux';
import {
    getCurrentPage,
    getFollowingProgressStatus,
    getIsFetchingStatus,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from 'redux/users-selectors';

type MapStatePropsType = {
    users: Array<UserPageType>;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean;
    followingInProgress: Array<number>;
};
type MapDispatchToPropsType = {
    setCurrentPage: (pageID: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    followUser: (userID: number) => void
    unFollowUser: (userID: number) => void
}
type UsersPropsType = MapStatePropsType & MapDispatchToPropsType;

// const mapStateToProps = (state: AppStateType): MapStatePropsType => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//     };
// };

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetchingStatus(state),
        followingInProgress: getFollowingProgressStatus(state),
    };
};

class UsersAPI extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (pageNum: number) => {
        this.props.setCurrentPage(pageNum);
        this.props.getUsers(pageNum, this.props.pageSize);
    };

    render() {
        const {
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

export const UsersContainer = compose<ComponentType>(withAuthRedirect, connect(mapStateToProps,
    {
        setCurrentPage: usersActions.setCurrentPage,
        getUsers: getUsersTC,
        followUser: followUserTC,
        unFollowUser: unFollowUserTC
    }))(UsersAPI)