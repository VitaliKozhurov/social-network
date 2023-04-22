import React from 'react';
import s from './Profile.module.css';
import {UserProfile} from './UserProfile/UserProfile';
import {PostCreator} from './PostCreator/PostCreator';
import {Posts} from './Posts/Posts';
import {PostsPageType} from '../../App';

type ProfilePropsType ={
    data:PostsPageType
};

export const Profile: React.FC<ProfilePropsType> = ({data}) => {
    return (
        <div>
            <div className={s.bgBody}>
                <div className={s.bg}></div>
            </div>
            <UserProfile />
            <PostCreator />
            <Posts posts={data.posts} />
        </div>
    );
};
