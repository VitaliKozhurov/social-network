import { InferActionsType, MessagesType, UserType } from "../appTypes/types";

export const dialogsActions = {
    addMessage: (value: string, id: string) => {
        return {
            type: "ADD-MESSAGE",
            payload: { value: value, id: id },
        } as const;
    },
};

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
};

type DialogsInitialState = typeof initialState;
export type DialogsReducerActionType = InferActionsType<typeof dialogsActions>;
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
                }
            };
        default:
            return state;
    }
};
