import {InferActionsType} from '../appTypes/types';
import {authAPI} from '../api/api';
import {AppThunk} from './redux-store';

export const authActions = {
    setAuthUserData: (data: Omit<AuthInitialType, 'isFetching'>) => {
        return {
            type: 'SET-USER-DATA',
            payload: {data},
        } as const;
    },
    setFetching: (isFetching: boolean) => {
        return {
            type: 'SET-FETCHING',
            payload: {isFetching}
        } as const
    },
    setAuthError: (error: string) => {
        return {
            type: 'SET-AUTH-ERROR',
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
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.payload.data,
            };
        case 'SET-FETCHING':
            return {
                ...state,
                isFetching: action.payload.isFetching
            }
        case 'SET-AUTH-ERROR':
            return {
                ...state,
                error: action.payload.error
            }
        default:
            return state;
    }
};

export const setAuthUserDataTC = (): AppThunk => (dispatch) => {
    dispatch(authActions.setFetching(true))
    authAPI.setAuth()
        .then((data) => {
            if (data.resultCode === 0) {
                const {id: userID, email, login} = data.data;
                dispatch(authActions.setAuthUserData({userID, email, login, isAuth: true, error: ''}));

            }
        })
        .finally(() => dispatch(authActions.setFetching(false)));
}

export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunk => (dispatch) => {
    dispatch(authActions.setFetching(true))
    authAPI.login(email, password, rememberMe)
        .then((data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserDataTC())
            }
            else{
                const error = data.messages.length?data.messages[0]:'Incorrect input values'
                dispatch(authActions.setAuthError(error))
            }
        }))
        .finally(() => dispatch(authActions.setFetching(false)));
}

export const logoutTC = (): AppThunk => (dispatch) => {
    authAPI.logout()
        .then((data => {
            if (data.resultCode === 0) {
                dispatch(authActions.setAuthUserData(initialState))
            }

        }))
}