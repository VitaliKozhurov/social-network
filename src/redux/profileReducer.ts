import {InferActionsType, PostType, UserProfileType} from '../appTypes/types';
import {AppThunk} from './redux-store';
import {profileAPI} from '../api/api';

export const profileActions = {
    addPost: (value: string) => {
        return {
            type: 'ADD-POST',
            payload: value,
        } as const;
    },
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
type ProfileInitialState = typeof initialState;

export const profileReducer = (
    state: ProfileInitialState = initialState,
    action: ProfileReducerActionType
): ProfileInitialState => {
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
        case 'SET-USER-PROFILE':
            return {...state, profile: action.payload.profile};
        case 'SET-USER-STATUS':
            return {...state, profileStatus: action.payload.status};
        default:
            return state;
    }
};

export const setUserProfileTC = (paramsID: string | undefined, userID: number): AppThunk => (dispatch) => {
    profileAPI
        .getProfile(paramsID, userID)
        .then((data) => {
            dispatch(profileActions.setUserProfile(data));
        });
}

export const getUserStatusTC = (paramsID: string | undefined, userID: number): AppThunk => (dispatch) => {
    profileAPI
        .getStatus(paramsID, userID)
        .then(data => {
            dispatch(profileActions.setUserStatus(data))
        })
}

export const updateUserStatusTC = (status: string): AppThunk => (dispatch) => {
    profileAPI
        .updateUserStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(profileActions.setUserStatus(status))
            }
        })
}