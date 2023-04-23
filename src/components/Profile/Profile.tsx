import React from 'react';
import s from './Profile.module.css';
import {UserProfile} from './UserProfile/UserProfile';
import {AddPostComponent} from './AddPostComponent/AddPostComponent';
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
            <AddPostComponent title={'My new Post'} placeholder={'Enter your message post'} />
            <Posts posts={data.posts} />
        </div>
    );
};
