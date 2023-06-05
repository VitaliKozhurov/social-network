import { InferActionsType, PostType, UserProfileType } from "../appTypes/types";

export const profileActions = {
    addPost: (value: string) => {
        return {
            type: "ADD-POST",
            payload: value,
        } as const;
    },
    updatePost: (value: string) => {
        return {
            type: "UPDATE-POST-MESSAGE",
            payload: value,
        } as const;
    },
    setUserProfile: (profile: UserProfileType) => {
        return {
            type: "SET-USER-PROFILE",
            payload: { profile },
        } as const;
    },
};

export type ProfileReducerActionType = InferActionsType<typeof profileActions>;

const initialState = {
    profile: {} as UserProfileType,
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
        case "ADD-POST":
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
        case "UPDATE-POST-MESSAGE":
            return { ...state, newPostText: action.payload };
        case "SET-USER-PROFILE":
            return { ...state, profile: action.payload.profile };

        default:
            return state;
    }
};
