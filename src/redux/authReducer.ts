import {InferActionsType} from '../appTypes/types';
import {authAPI} from '../api/api';
import {AppThunk} from './redux-store';

export const authActions = {
    setAuthUserData: (data: Omit<AuthInitialType, 'isFetching'>) => {
        return {
            type: 'AUTH/SET-USER-DATA',
            payload: {data},
        } as const;
    },
    setFetching: (isFetching: boolean) => {
        return {
            type: 'AUTH/SET-FETCHING',
            payload: {isFetching}
        } as const
    },
    setAuthError: (error: string) => {
        return {
            type: 'AUTH/SET-AUTH-ERROR',
            payload: {error}
        } as const
    }
};


let initialState = {
    userID: 0,
    email: '',
    login: '',
    isAuth: false as boolean,
    isFetching: false as boolean,
    error: ''
};

type AuthInitialType = typeof initialState;
export type AuthReducerActionType = InferActionsType<typeof authActions>;
export const authReducer = (
    state: AuthInitialType = initialState,
    action: AuthReducerActionType
): AuthInitialType => {
    switch (action.type) {
        case 'AUTH/SET-USER-DATA':
            return {
                ...state,
                ...action.payload.data,
            };
        case 'AUTH/SET-FETCHING':
            return {
                ...state,
                isFetching: action.payload.isFetching
            }
        case 'AUTH/SET-AUTH-ERROR':
            return {
                ...state,
                error: action.payload.error
            }
        default:
            return state;
    }
};

export const setAuthUserDataTC = (): AppThunk => async (dispatch) => {
    dispatch(authActions.setFetching(true))
    try {
        const res = await authAPI.setAuth();
        if (res.resultCode === 0) {
            const {id: userID, email, login} = res.data;
            dispatch(authActions.setAuthUserData({userID, email, login, isAuth: true, error: ''}));
        }
    } catch (e) {

    }
    dispatch(authActions.setFetching(false))
}

export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunk => async (dispatch) => {
    dispatch(authActions.setFetching(true))
    try {
        const res = await authAPI.login(email, password, rememberMe);
        if (res.resultCode === 0) {
            dispatch(setAuthUserDataTC())
        } else {
            const error = res.messages.length ? res.messages[0] : 'Incorrect input values'
            dispatch(authActions.setAuthError(error))
        }
    } catch (e) {
    }
    dispatch(authActions.setFetching(false))
}

export const logoutTC = (): AppThunk => async (dispatch) => {

    try {
        const res = await authAPI.logout();
        if (res.resultCode === 0) {
            dispatch(authActions.setAuthUserData(initialState))
        }
    } catch (e) {
    }
}