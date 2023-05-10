import {profileReducer} from './profileReducer';
import {dialogReducer} from './dialogsReducer';

export type StoreType = {
    _state: RootStateType;
    getState: () => RootStateType;
    _onChangeState: () => void;
    subscribe: (callback: () => void) => void;
    dispatch: (action: ActionType) => void;
};
export type RootStateType = {
    postsPage: PostsPageType;
    dialogsPage: DialogsPageType;
};
export type PostType = {
    id: number;
    message: string;
    likeCount: number;
};
export type PostsType = Array<PostType>;
export type PostsPageType = {
    posts: PostsType;
    newPostText: string;
};
export type MessagesType = {
    owner: string;
    message: string;
};
export type UserType = {
    userId: string;
    userName: string;
};
export type DialogsPageType = {
    users: Array<UserType>;
    messages: {
        [key: string]: Array<MessagesType>;
    };
    newMessageBody: string;
};

export type ActionType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updatePostAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateMessageAC>;

export const addPostAC = (value: string) => {
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
export const addMessageAC = (value: string, id: string) => {
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

export const store: StoreType = {
    _state: {
        postsPage: {
            posts: [
                {
                    id: 1,
                    message: 'Hello my friend! How are you?',
                    likeCount: 5,
                },
                {
                    id: 2,
                    message:
                        'Hi I\'m study in It-incubator. It\'s the best community in the world)',
                    likeCount: 12,
                },
            ],
            newPostText: 'Hello it-incubator',
        },
        dialogsPage: {
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
        },
    },
    _onChangeState() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer: () => void) {
        this._onChangeState = observer;
    },
    dispatch(action) {
        this._state.postsPage = profileReducer(this._state.postsPage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        this._onChangeState();
    },
};