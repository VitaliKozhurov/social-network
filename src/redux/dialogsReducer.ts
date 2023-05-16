import { MessagesType, UserType } from "../appTypes/types";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

export const addMessageAC = (value: string, id: string) => {
    return {
        type: ADD_MESSAGE,
        payload: { value: value, id: id },
    } as const;
};
export const updateMessageAC = (value: string) => {
    return {
        type: UPDATE_MESSAGE,
        payload: { value },
    } as const;
};
export type DialogsReducerActionType =
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateMessageAC>;

const initialState = {
    users: [
        { userId: "1", userName: "Dimych" },
        { userId: "2", userName: "Viktor" },
    ] as Array<UserType>,
    messages: {
        "1": [
            {
                owner: "Dimych",
                message: "Hello Im Dimych. I love React",
            },
            {
                owner: "Dimych",
                message:
                    "I want to teach you React and JavaScript I want to teach you React and JavaScript I want to teach you React and JavaScript I want to teach you React and JavaScript I want to teach you React and JavaScript I want to teach you React and JavaScript",
            },
        ],
        "2": [
            {
                owner: "Viktor",
                message: "Hello Im Viktor. I love native JS",
            },
        ],
    } as { [key: string]: Array<MessagesType> },
    newMessageBody: "",
};

type DialogsInitialState = typeof initialState;

export const dialogReducer = (
    state: DialogsInitialState = initialState,
    action: DialogsReducerActionType
): DialogsInitialState => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage = {
                owner: "VK",
                message: action.payload.value,
            };
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.payload.id]: [
                        ...state.messages[action.payload.id],
                        newMessage,
                    ],
                },
                newMessageBody: "",
            };

        case "UPDATE-MESSAGE":
            return { ...state, newMessageBody: action.payload.value };
        default:
            return state;
    }
};
