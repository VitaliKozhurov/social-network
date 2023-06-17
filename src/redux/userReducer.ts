import {InferActionsType, UserPageType} from '../appTypes/types';
import {usersAPI} from '../api/api';
import {AppThunk} from './redux-store';

export const usersActions = {
    followUser: (userID: number) => {
        return {
            type: 'FOLLOW-USER',
            payload: {userID},
        } as const;
    },
    unfollowUser: (userID: number) => {
        return {
            type: 'UNFOLLOW-USER',
            payload: {userID},
        } as const;
    },
    setUsers: (newUsers: Array<UserPageType>) => {
        return {
            type: 'SET-USERS',
            payload: {
                newUsers,
            },
        } as const;
    },
    setCurrentPage: (pageID: number) => {
        return {
            type: 'SET-CURRENT-PAGE',
            payload: {pageID},
        } as const;
    },
    setTotalUsersCount: (count: number) => {
        return {
            type: 'SET-TOTAL-USERS-COUNT',
            payload: {count},
        } as const;
    },
    toggleIsFetching: (value: boolean) => {
        return {
            type: 'TOGGLE-IS-FETCHING',
            payload: {value},
        } as const;
    },
    changeFollowingStatus: (
        fetchFollow: boolean,
        idFollowingUser: number
    ) => {
        return {
            type: 'CHANGE-FOLLOWING-STATUS',
            payload: {fetchFollow, idFollowingUser},
        } as const;
    }
}

export type UsersActionsType = InferActionsType<typeof usersActions>

const initialState = {
    users: [] as Array<UserPageType>,
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,
};

type UsersIntitialStateType = typeof initialState;

export const userReducer = (
    state: UsersIntitialStateType = initialState,
    action: UsersActionsType
): UsersIntitialStateType => {
    switch (action.type) {
        case 'FOLLOW-USER':
            return {
                ...state,
                users: state.users.map((user) =>
                    user.id === action.payload.userID
                        ? {
                            ...user,
                            followed: true,
                        }
                        : user
                ),
            };
        case 'UNFOLLOW-USER':
            return {
                ...state,
                users: state.users.map((user) =>
                    user.id === action.payload.userID
                        ? {
                            ...user,
                            followed: false,
                        }
                        : user
                ),
            };
        case 'SET-USERS':
            return {
                ...state,
                users: action.payload.newUsers,
            };
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.payload.pageID};
        case 'SET-TOTAL-USERS-COUNT':
            return {
                ...state,
                totalUsersCount: action.payload.count,
            };
        case 'TOGGLE-IS-FETCHING':
            return {
                ...state,
                isFetching: action.payload.value,
            };
        case 'CHANGE-FOLLOWING-STATUS':
            return {
                ...state,
                followingInProgress: action.payload.fetchFollow
                    ? [
                        ...state.followingInProgress,
                        action.payload.idFollowingUser,
                    ]
                    : state.followingInProgress.filter(
                        (userID) => userID !== action.payload.idFollowingUser
                    ),
            };
        default:
            return state;
    }
};

export const getUsersTC =
    (currentPage: number, pageSize: number): AppThunk =>
        (dispatch) => {
            dispatch(usersActions.toggleIsFetching(true));
            usersAPI.getUsers(currentPage, pageSize).then((data) => {
                dispatch(usersActions.setUsers(data.items));
                dispatch(usersActions.setTotalUsersCount(data.totalCount));
                dispatch(usersActions.toggleIsFetching(false));
            });
        };
