import React from 'react';
import s from './Profile.module.css';
import {UserProfile} from './UserProfile/UserProfile';
import {AddPostContainer} from './AddPostComponent/AddPostContainer';
import {PostsContainer} from './Posts/PostsContainer';

export const Profile = () => {

    return (
        <div>
            <div className={s.bgBody}>
                <div className={s.bg}></div>
            </div>
            <UserProfile />
            <AddPostContainer />
            <PostsContainer />
        </div>
    );
};
