import React, {FC} from 'react';
import s from './Profile.module.css';
import {UserProfile} from './UserProfile/UserProfile';
import {AddPostContainer} from './AddPostComponent/AddPostContainer';
import {PostsContainer} from './Posts/PostsContainer';

type ProfilePropsType = { profile: any }


export const Profile: FC<ProfilePropsType> = ({profile}) => {

    return (
        <div>
            <div className={s.bgBody}>
                <div className={s.bg}></div>
            </div>
            <UserProfile profile={profile} />
            <AddPostContainer />
            <PostsContainer />
        </div>
    );
};
