import React from 'react';
import s from './Profile.module.css';
import {UserProfile} from './UserProfile/UserProfile';
import {PostCreator} from './PostCreator/PostCreator';
import {Posts, PostsPropsType} from './Posts/Posts';

type ProfilePropsType = PostsPropsType;

export const Profile: React.FC<ProfilePropsType> = ({userPosts}) => {
    return (
        <div>
            <div className={s.bgBody}>
                <div className={s.bg}></div>
            </div>
            <UserProfile />
            <PostCreator />
            <Posts userPosts={userPosts} />
        </div>
    );
};
