import {AppThunk} from './redux-store';
import {setAuthUserDataTC} from './authReducer';

export const initializeAC = (isInitialize: boolean) => ({
    type: 'INITIALIZE-APP',
    payload: {isInitialize}
} as const)

export const setErrorAppStatusAC = (error: string|null) => ({
    type: 'SET-APP-ERROR-STATUS',
    payload: {error}
} as const)

const initialState = {
    isInitialize: false as boolean,
    isAppError:null as string|null
}

type InitialStateType = typeof initialState;
export type AppReducerActionsType = ReturnType<typeof initializeAC> | ReturnType<typeof setErrorAppStatusAC>

export const appReducer = (state: InitialStateType = initialState, action: AppReducerActionsType): InitialStateType => {
    switch (action.type) {
        case 'INITIALIZE-APP': {
            return {
                ...state,
                isInitialize: action.payload.isInitialize
            }
        }
        case 'SET-APP-ERROR-STATUS':{
            return {
                ...state,
                isAppError: action.payload.error
            }
        }
        default:
            return state
    }
}

export const initializeAppTC = (): AppThunk => (dispatch) => {
    // Костыль для возврата промиса :))
    new Promise(((res, rej) => {
        res(dispatch(setAuthUserDataTC()))
    })).then(() => dispatch(initializeAC(true)))

}
