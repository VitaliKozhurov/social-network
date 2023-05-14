import {profileReducer, ProfileReducerActionType} from './profileReducer';
import {dialogReducer, DialogsReducerActionType} from './dialogsReducer';
import {RootStateType} from '../appTypes/types';

export type ActionType = ProfileReducerActionType | DialogsReducerActionType;


export type StoreType = {
    _state: RootStateType;
    getState: () => RootStateType;
    _onChangeState: () => void;
    subscribe: (callback: () => void) => void;
/*    dispatch: (action: ActionType) => void;*/
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
  /*  dispatch(action) {
        this._state.postsPage = profileReducer(this._state.postsPage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        this._onChangeState();
    },*/
};