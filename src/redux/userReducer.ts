import {UserPageType} from '../appTypes/types';

const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

export const followUserAC = (userID: number) => {
    return {
        type: FOLLOW_USER,
        payload: {userID},
    } as const;
};
export const unfollowUserAC = (userID: number) => {
    return {
        type: UNFOLLOW_USER,
        payload: {userID},
    } as const;
};
export const setUserAC = (newUsers: Array<UserPageType>) => {
    return {
        type: SET_USERS,
        payload: {
            newUsers
        }
    } as const
}
export const setCurrentPageAC = (pageID: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {pageID}
    } as const
}
export const setTotalUsersCountAC = (count: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        payload: {count}
    } as const
}

export type UsersReducerActionType =
    ReturnType<typeof followUserAC>
    | ReturnType<typeof unfollowUserAC>
    | ReturnType<typeof setUserAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>

const initialState = {
    users: [] as Array<UserPageType>,
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1
};

type UsersInitialState = typeof initialState;

export const userReducer = (
    state: UsersInitialState = initialState,
    action: UsersReducerActionType
): UsersInitialState => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.userID
                    ? {
                        ...user,
                        followed: true
                    }
                    : user)
            };
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.userID
                    ? {
                        ...user,
                        followed: false
                    }
                    : user)
            };
        case SET_USERS:
            return {
                ...state,
                users: action.payload.newUsers
            };
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload.pageID};
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.payload.count
            }

        default:
            return state;
    }
};