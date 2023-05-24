import { UserPageType } from "../appTypes/types";

export const usersActions = {
    followUserAC: (userID: number) => {
        return {
            type: "FOLLOW-USER",
            payload: { userID },
        } as const;
    },
    unfollowUserAC: (userID: number) => {
        return {
            type: "UNFOLLOW-USER",
            payload: { userID },
        } as const;
    },
    setUserAC: (newUsers: Array<UserPageType>) => {
        return {
            type: "SET-USERS",
            payload: {
                newUsers,
            },
        } as const;
    },
    setCurrentPageAC: (pageID: number) => {
        return {
            type: "SET-CURRENT-PAGE",
            payload: { pageID },
        } as const;
    },
    setTotalUsersCountAC: (count: number) => {
        return {
            type: "SET-TOTAL-USERS-COUNT",
            payload: { count },
        } as const;
    },
};

type UsersReducerActionType<T> = T extends { [key: string]: infer U }
    ? U
    : never;

type InferActionsType<
    T extends { [key: string]: (...args: Array<any>) => any }
> = ReturnType<UsersReducerActionType<T>>;

const initialState = {
    users: [] as Array<UserPageType>,
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
};

type UsersInitialState = typeof initialState;

export const userReducer = (
    state: UsersInitialState = initialState,
    action: InferActionsType<typeof usersActions>
): UsersInitialState => {
    switch (action.type) {
        case "FOLLOW-USER":
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
        case "UNFOLLOW-USER":
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
        case "SET-USERS":
            return {
                ...state,
                users: action.payload.newUsers,
            };
        case "SET-CURRENT-PAGE":
            return { ...state, currentPage: action.payload.pageID };
        case "SET-TOTAL-USERS-COUNT":
            return {
                ...state,
                totalUsersCount: action.payload.count,
            };

        default:
            return state;
    }
};
