import {InferActionsType, UserPageType} from '../appTypes/types';

// Объект action creators
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
            payload: {value}
        } as const;
    }
};

const initialState = {
    users: [] as Array<UserPageType>,
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
};

type UsersInitialState = typeof initialState;

export const userReducer = (
    state: UsersInitialState = initialState,
    action: InferActionsType<typeof usersActions>
): UsersInitialState => {
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
                isFetching: action.payload.value
            }
        default:
            return state;
    }
};
