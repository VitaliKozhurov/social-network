import {profileActions, ProfileInitialStateType, profileReducer} from 'redux/profileReducer';
import {UserProfileType} from 'appTypes/types';

let initialState: ProfileInitialStateType;
beforeEach(() => {
    initialState = {
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
            }
        ]
    }
})

it('should add new post', () => {
    const newState = profileReducer(initialState, profileActions.addPost('new post text'));
    expect(newState.posts.length).toBe(3);
    expect(newState.posts[2].id).toBe(3);
    expect(newState.posts[2].message).toBe('new post text');
    expect(newState.posts[2].likeCount).toBe(0);
});

it('should delete post', ()=>{
    const newState=profileReducer(initialState,profileActions.removePost(1))
    expect(newState.posts.length).toBe(1)
    expect(newState.posts[0].id).toBe(2)
});