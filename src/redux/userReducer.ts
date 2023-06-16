import { Dispatch } from "redux";
import { UserPageType } from "../appTypes/types";
import { usersAPI } from "../api/api";
import { AppActionsType, AppThunk } from "./redux-store";

export const followUserAC = (userID: number) => {
    return {
        type: "FOLLOW-USER",
        payload: { userID },
    } as const;
};
export const unfollowUserAC = (userID: number) => {
    return {
        type: "UNFOLLOW-USER",
        payload: { userID },
    } as const;
};
export const setUsersAC = (newUsers: Array<UserPageType>) => {
    return {
        type: "SET-USERS",
        payload: {
            newUsers,
        },
    } as const;
};
export const setCurrentPageAC = (pageID: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        payload: { pageID },
    } as const;
};
export const setTotalUsersCountAC = (count: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        payload: { count },
    } as const;
};
export const toggleIsFetchingAC = (value: boolean) => {
    return {
        type: "TOGGLE-IS-FETCHING",
        payload: { value },
    } as const;
};
export const changeFollowingStatusAC = (
    fetchFollow: boolean,
    idFollowingUser: number
) => {
    return {
        type: "CHANGE-FOLLOWING-STATUS",
        payload: { fetchFollow, idFollowingUser },
    } as const;
};

export type UsersActionsType =
    | ReturnType<typeof followUserAC>
    | ReturnType<typeof unfollowUserAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof toggleIsFetchingAC>
    | ReturnType<typeof changeFollowingStatusAC>;

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
        case "TOGGLE-IS-FETCHING":
            return {
                ...state,
                isFetching: action.payload.value,
            };
        case "CHANGE-FOLLOWING-STATUS":
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

export const getUsersThunkCreator =
    (currentPage: number, pageSize: number): AppThunk =>
    (dispatch) => {
        dispatch(toggleIsFetchingAC(true));
        usersAPI.getUsers(currentPage, pageSize).then((data) => {
            dispatch(setUsersAC(data.items));
            dispatch(setTotalUsersCountAC(data.totalCount));
            dispatch(toggleIsFetchingAC(false));
        });
    };
