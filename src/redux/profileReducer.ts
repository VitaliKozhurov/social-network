import { PostType } from "../appTypes/types";

const ADD_POST = "ADD-POST";
const UPDATE_POST_MESSAGE = "UPDATE-POST-MESSAGE";

export const addPostAC = (value: string) => {
    return {
        type: ADD_POST,
        payload: value,
    } as const;
};
export const updatePostAC = (value: string) => {
    return {
        type: UPDATE_POST_MESSAGE,
        payload: value,
    } as const;
};
export type ProfileReducerActionType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updatePostAC>;

const initialState = {
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
    ] as Array<PostType>,
    newPostText: "",
};
type ProfileInitialState = typeof initialState;

export const profileReducer = (
    state: ProfileInitialState = initialState,
    action: ProfileReducerActionType
): ProfileInitialState => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: state.posts.length + 1,
                message: action.payload,
                likeCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: "",
            };

        case UPDATE_POST_MESSAGE:
            return { ...state, newPostText: action.payload };

        default:
            return state;
    }
};