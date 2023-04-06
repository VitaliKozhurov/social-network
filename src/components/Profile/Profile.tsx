import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import { UserProfile } from './UserProfile/UserProfile';


export const Profile = () => {
    return (
        <div>
            <div className={s.bgBody}>
                <div className={s.bg}></div>
            </div>
            <UserProfile/>
            <MyPosts />
        </div>
    )
};