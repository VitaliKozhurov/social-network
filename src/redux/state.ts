export type StoreType = {
    _state: RootStateType;
    getState: () => RootStateType;
    _onChangeState: () => void;
    addPost: () => void;
    changeText: (value: string) => void;
    subscribe: (callback: () => void) => void;
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
export type DialogType = {
    userId: number;
    userName: string;
};
export type DialogsType = Array<DialogType>;
export type MessagesType = {
    [key: string]: Array<string>;
};
export type DialogsPageType = {
    dialogs: DialogsType;
    messages: MessagesType;
};

export const store: StoreType = {
    _state: {
        postsPage: {
            posts: [
                {
                    id: 1,
                    message: "Hello my friend! How are you?",
                    likeCount: 5,
                },
                {
                    id: 2,
                    message:
                        "Hi I'm study in It-incubator. It's the best community in the world)",
                    likeCount: 12,
                },
            ],
            newPostText: "Hello it-incubator",
        },
        dialogsPage: {
            dialogs: [
                {
                    userId: 1,
                    userName: "Dimych",
                },
                {
                    userId: 2,
                    userName: "Viktor",
                },
            ],
            messages: {
                "1": [
                    "Hello Im Dimych. I love React",
                    "I want to teach you React and JavaScript I want to teach you React and JavaScript I want to teach you React and JavaScript I want to teach you React and JavaScript I want to teach you React and JavaScript I want to teach you React and JavaScript",
                ],
                "2": ["Hello Im Viktor. I love native JS"],
            },
        },
    },
    _onChangeState() {
        console.log("State is change");
    },
    getState() {
        return this._state;
    },
    addPost() {
        const newPost = {
            id: this._state.postsPage.posts.length + 1,
            message: this._state.postsPage.newPostText,
            likeCount: 0,
        };
        this._state.postsPage.posts.push(newPost);
        this._state.postsPage.newPostText = "";
        this._onChangeState();
    },
    changeText(value: string) {
        this._state.postsPage.newPostText = value;
        this._onChangeState();
    },
    subscribe(observer: () => void) {
        this._onChangeState = observer;
    },
};
