import {InferActionsType} from '../appTypes/types';
import {authAPI} from '../api/api';
import {AppThunk} from './redux-store';

export const authActions = {
    setAuthUserData: (data: Omit<AuthInitialType, 'isAuth'>) => {
        return {
            type: 'SET-USER-DATA',
            payload: {data},
        } as const;
    },
};

let initialState = {
    userID: 0,
    email: '',
    login: '',
    isAuth: false,
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
                isAuth: true,
            };
        default:
            return state;
    }
};

export const setAuthUserDataTC = (): AppThunk => (dispatch) => {
    authAPI.setAuth().then((data) => {
        if (data.resultCode === 0) {
            const {id: userID, email, login} = data.data;
            dispatch(authActions.setAuthUserData({userID, email, login}));
        }
    });
}