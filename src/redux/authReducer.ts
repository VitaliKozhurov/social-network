import {InferActionsType} from '../appTypes/types';
import {authAPI, decurityAPI} from '../api/api';
import {AppThunk} from './redux-store';
import {requestErrorHandler} from "../utils/requestErrorHandler";

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
    },
    getCaptchaURLSuccess: (captchaURL: string) => {
        return {
            type: 'AUTH/GET-CAPTCHA-URL',
            payload: {captchaURL}
        } as const
    }
};


let initialState = {
    userID: 0,
    email: '',
    login: '',
    isAuth: false as boolean,
    isFetching: false as boolean,
    error: '',
    captchaURL: ''
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
        case 'AUTH/GET-CAPTCHA-URL':
            return {
                ...state,
                captchaURL: action.payload.captchaURL
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
            dispatch(authActions.setAuthUserData({userID, email, login, isAuth: true, error: '', captchaURL: ''}));
        }
    } catch (e: unknown) {
        requestErrorHandler(e, dispatch)
    } finally {
        dispatch(authActions.setFetching(false))
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean, captcha?: string): AppThunk => async (dispatch) => {
    dispatch(authActions.setFetching(true))
    try {
        const res = await authAPI.login(email, password, rememberMe, captcha);
        if (res.resultCode === 0) {
            dispatch(setAuthUserDataTC())
        } else if (res.resultCode === 10) {
            dispatch(getCaptchaURLTC())
        } else {
            const error = res.messages.length ? res.messages[0] : 'Incorrect input values'
            dispatch(authActions.setAuthError(error))
        }
    } catch (e) {
        requestErrorHandler(e, dispatch)
    } finally {
        dispatch(authActions.setFetching(false))
    }
}

export const getCaptchaURLTC = (): AppThunk => async (dispatch) => {
    try {
        const res = await decurityAPI.getCaptchaURL();
        const captcha = res.url;
        dispatch(authActions.getCaptchaURLSuccess(captcha))
    } catch (e) {
        requestErrorHandler(e, dispatch)
    }
}

export const logoutTC = (): AppThunk => async (dispatch) => {
    try {
        const res = await authAPI.logout();
        if (res.resultCode === 0) {
            dispatch(authActions.setAuthUserData(initialState))
        }
    } catch (e) {
        requestErrorHandler(e, dispatch)
    }
}