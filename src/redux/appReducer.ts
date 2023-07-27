import {AppThunk} from './redux-store';
import {setAuthUserDataTC} from './authReducer';

export const initializeAC = (isInitialize: boolean) => ({
    type: 'INITIALIZE-APP',
    payload: {isInitialize}
} as const)

const initialState = {
    isInitialize: false as boolean
}

type InitialStateType = typeof initialState;
export type AppReducerActionsType = ReturnType<typeof initializeAC>

export const appReducer = (state: InitialStateType = initialState, action: AppReducerActionsType): InitialStateType => {
    switch (action.type) {
        case 'INITIALIZE-APP': {
            return {
                ...state,
                isInitialize: action.payload.isInitialize
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
