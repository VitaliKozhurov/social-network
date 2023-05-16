import {UserPageType} from '../appTypes/types';

const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS';

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

export type UsersReducerActionType =
    ReturnType<typeof followUserAC>
    | ReturnType<typeof unfollowUserAC>
    | ReturnType<typeof setUserAC>;

const initialState = {
    users: [] as Array<UserPageType>,

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
                users: [...state.users, ...action.payload.newUsers]
            };

        default:
            return state;
    }
};