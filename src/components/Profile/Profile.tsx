import React, {FC} from 'react';
import s from './Profile.module.css';
import {UserProfile} from './UserProfile/UserProfile';
import {AddPostContainer} from './AddPostComponent/AddPostContainer';
import {PostsContainer} from './Posts/PostsContainer';
import {UserProfileType} from 'appTypes/types';

type ProfilePropsType = {
    profile: UserProfileType
    profileStatus: string
    isOwner:boolean
    savePhoto: (file: File) => void
    updateUserStatus: (status: string) => void
};

export const Profile: FC<ProfilePropsType> = ({profile, profileStatus, isOwner,savePhoto, updateUserStatus}) => {

    return (
        <div>
            <div className={s.bgBody}>
                <div className={s.bg}></div>
            </div>
            <UserProfile profile={profile} profileStatus={profileStatus} isOwner={isOwner} savePhoto={savePhoto} updateUserStatus={updateUserStatus} />
            <AddPostContainer />
            <PostsContainer />
        </div>
    );
};
