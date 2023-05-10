import {ActionType, PostsPageType} from './state';

/*export const addPostAC = (value: string) => {
    return {
        type: 'ADD-POST',
        payload: value,
    } as const;
};
export const updatePostAC = (value: string) => {
    return {
        type: 'UPDATE-POST-MESSAGE',
        payload: value,
    } as const;
};

export type ProfileReducerActionType = ReturnType<typeof addPostAC> | ReturnType<typeof updatePostAC>*/

export const profileReducer = (state: PostsPageType, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {
                id: state.posts.length + 1,
                message: action.payload,
                likeCount: 0,
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case 'UPDATE-POST-MESSAGE':
            state.newPostText = action.payload;
            return state;

        default:
            return state
    }

}