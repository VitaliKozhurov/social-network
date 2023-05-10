import {ActionType, DialogsPageType} from './state';

/*export const addMessageAC = (value: string, id: string) => {
    return {
        type: 'ADD-MESSAGE',
        payload: {value: value, id: id},
    } as const;
};
export const updateMessageAC = (value: string) => {
    return {
        type: 'UPDATE-MESSAGE',
        payload: value,
    } as const;
};

export type DialogsReducerActionType = ReturnType<typeof addMessageAC> | ReturnType<typeof updateMessageAC>*/

export const dialogReducer = (state: DialogsPageType, action: ActionType) => {
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