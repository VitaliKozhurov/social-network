import axios, {AxiosError} from "axios";
import {setErrorAppStatusAC} from "../redux/appReducer";
import {AppDispatch} from "../redux/redux-store";

export const requestErrorHandler = (e: unknown, dispatch: AppDispatch) => {
    const err = e as Error | AxiosError<{ error: string }>;
    if (axios.isAxiosError(err)) {
        const error = err.message ? err.message : 'Some error occurred';
        dispatch(setErrorAppStatusAC(error))
    } else {
        dispatch(setErrorAppStatusAC(`Native Error ${err.message}`))
    }
};

