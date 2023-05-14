import {ProfileReducerActionType} from '../redux/profileReducer';
import {DialogsReducerActionType} from '../redux/dialogsReducer';

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

export type ActionsType = ProfileReducerActionType | DialogsReducerActionType;
