import { InferActionsType } from "../appTypes/types";

export const authActions = {
    setAuthUserData: (data: Omit<AuthInitialType, "isAuth">) => {
        return {
            type: "SET-USER-DATA",
            payload: { data },
        } as const;
    },
};

type AuthInitialType = {
    userID: number;
    email: string;
    login: string;
    isAuth: boolean;
};
let initialState = {
    userID: 0,
    email: "",
    login: "",
    isAuth: false,
};

export const authReducer = (
    state: AuthInitialType = initialState,
    action: InferActionsType<typeof authActions>
): AuthInitialType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.payload.data,
                isAuth: true,
            };
        default:
            return state;
    }
};
