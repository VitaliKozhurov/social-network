import {InferActionsType, UserPageType} from '../appTypes/types';
import {followAPI, usersAPI} from '../api/api';
import {AppThunk} from './redux-store';
import {Dispatch} from 'redux';
import {updateObjectInUserArray} from '../utils/object-helper';

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

export type UsersIntitialStateType = typeof initialState;

export const userReducer = (
    state: UsersIntitialStateType = initialState,
    action: UsersActionsType
): UsersIntitialStateType => {
    switch (action.type) {
        case 'FOLLOW-USER':
            return {
                ...state,
                users: updateObjectInUserArray(action.payload.userID, state,{followed:true}),
            };
        case 'UNFOLLOW-USER':
            return {
                ...state,
                users: updateObjectInUserArray(action.payload.userID, state,{followed:false}),
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
        async (dispatch) => {
            dispatch(usersActions.toggleIsFetching(true));
            try {
                const res = await usersAPI.getUsers(currentPage, pageSize);
                dispatch(usersActions.setUsers(res.items));
                dispatch(usersActions.setTotalUsersCount(res.totalCount));
                dispatch(usersActions.toggleIsFetching(false));
            } catch (e) {
            }
        };

type ActionCreatorType = typeof usersActions.followUser | typeof usersActions.unfollowUser
type ApiMethodType = (userID: number) => Promise<{ resultCode: number, messages: string[], data: {} }>


const followUnfollowFlow = async (
    userID: number,
    dispatch: Dispatch,
    apiMethod: ApiMethodType,
    actionCreator: ActionCreatorType) => {
    try {
        dispatch(usersActions.changeFollowingStatus(true, userID));
        const res = await apiMethod(userID)
        if (res.resultCode === 0) {
            dispatch(actionCreator(userID));
        }
        dispatch(usersActions.changeFollowingStatus(false, userID))
    } catch (e) {

    }
}

export const followUserTC =
    (userID: number): AppThunk =>
        async (dispatch) => {
            const apiMethod = followAPI.setFollow
            const actionCreator = usersActions.followUser
            await followUnfollowFlow(userID, dispatch, apiMethod, actionCreator)
        };

export const unFollowUserTC =
    (userID: number): AppThunk =>
        async (dispatch) => {
            const apiMethod = followAPI.setUnFollow
            const actionCreator = usersActions.unfollowUser
            await followUnfollowFlow(userID, dispatch, apiMethod, actionCreator)
        };
