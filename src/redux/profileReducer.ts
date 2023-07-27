import {InferActionsType, PostType, UserProfileType} from 'appTypes/types';
import {AppThunk} from './redux-store';
import {profileAPI} from 'api/api';

export const profileActions = {
    addPost: (value: string) => {
        return {
            type: 'ADD-POST',
            payload: value,
        } as const;
    },
    removePost: (postID: number) => ({
        type: 'REMOVE-POST',
        payload: postID
    } as const),
    setUserProfile: (profile: UserProfileType) => {
        return {
            type: 'SET-USER-PROFILE',
            payload: {profile},
        } as const;
    },
    setUserStatus: (status: string) => {
        return {
            type: 'SET-USER-STATUS',
            payload: {status}
        } as const;
    },
};

export type ProfileReducerActionType = InferActionsType<typeof profileActions>;

const initialState = {
    profile: {} as UserProfileType,
    profileStatus: '',
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
    ] as Array<PostType>
};
export type ProfileInitialStateType = typeof initialState;

export const profileReducer = (
    state: ProfileInitialStateType = initialState,
    action: ProfileReducerActionType
): ProfileInitialStateType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {
                id: state.posts.length + 1,
                message: action.payload,
                likeCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        case 'REMOVE-POST':
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload)
            }
        case 'SET-USER-PROFILE':
            return {...state, profile: action.payload.profile};
        case 'SET-USER-STATUS':
            return {...state, profileStatus: action.payload.status};
        default:
            return state;
    }
};

export const setUserProfileTC = (paramsID: string | undefined, userID: number): AppThunk => async (dispatch) => {

    try {
        const res = await profileAPI.getProfile(paramsID, userID);
        dispatch(profileActions.setUserProfile(res));
    } catch (e) {

    }
}

export const getUserStatusTC = (paramsID: string | undefined, userID: number): AppThunk => async (dispatch) => {
    try {
        const res = await profileAPI.getStatus(paramsID, userID);
        dispatch(profileActions.setUserStatus(res))
    } catch (e) {
    }
}

export const updateUserStatusTC = (status: string): AppThunk => async (dispatch) => {

    try {
        const res = await profileAPI.updateUserStatus(status)
        if (res.resultCode === 0) {
            dispatch(profileActions.setUserStatus(status))
        }
    } catch (e) {
    }
}