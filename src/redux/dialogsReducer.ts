import {DialogsPageType} from '../appTypes/types';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

export const addMessageAC = (value: string, id: string) => {
    return {
        type: ADD_MESSAGE,
        payload: {value: value, id: id},
    } as const;
};
export const updateMessageAC = (value: string) => {
    return {
        type: UPDATE_MESSAGE,
        payload: value,
    } as const;
};
export type DialogsReducerActionType = ReturnType<typeof addMessageAC> | ReturnType<typeof updateMessageAC>

const initialState = {
    users: [
        {userId: '1', userName: 'Dimych'},
        {userId: '2', userName: 'Viktor'},
    ],
    messages: {
        '1': [
            {
                owner: 'Dimych',
                message: 'Hello Im Dimych. I love React',
            },
            {
                owner: 'Dimych',
                message:
                    'I want to teach you React and JavaScript I want to teach you React and JavaScript I want to teach you React and JavaScript I want to teach you React and JavaScript I want to teach you React and JavaScript I want to teach you React and JavaScript',
            },
        ],
        '2': [
            {
                owner: 'Viktor',
                message: 'Hello Im Viktor. I love native JS',
            },
        ],
    },
    newMessageBody: '',
}

export const dialogReducer = (state: DialogsPageType = initialState, action: DialogsReducerActionType) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage = {
                owner: 'VK',
                message: action.payload.value,
            };
            state.messages[action.payload.id].push(
                newMessage
            );
            state.newMessageBody = '';
            return state

        case 'UPDATE-MESSAGE':
            state.newMessageBody = action.payload;
            return state
        default:
            return state
    }

}