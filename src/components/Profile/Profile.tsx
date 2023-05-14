import React from 'react';
import s from './Profile.module.css';
import {UserProfile} from './UserProfile/UserProfile';
import {AddPostComponent} from './AddPostComponent/AddPostComponent';
import {Posts} from './Posts/Posts';
import {addPostAC, updatePostAC} from '../../redux/profileReducer';
import {ActionsType, PostsPageType} from '../../appTypes/types';

type ProfilePropsType = {
    profileState: PostsPageType
    dispatch:(action:ActionsType)=>void
};

export const Profile: React.FC<ProfilePropsType> = ({profileState, dispatch}) => {

    const addPost = (value: string) => {
        dispatch(addPostAC(value));
    };
    const updatePost = (value: string) => {
        dispatch(updatePostAC(value));
    };
    return (
        <div>
            <div className={s.bgBody}>
                <div className={s.bg}></div>
            </div>
            <UserProfile />
            <AddPostComponent
                title={'My new Post'}
                value={profileState.newPostText}
                placeholder={'Enter your message post'}
                addPost={addPost}
                updatePost={updatePost}
            />
            <Posts posts={profileState.posts} />
        </div>
    );
};
