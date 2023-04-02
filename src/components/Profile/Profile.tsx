import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';

export const Profile = () => {
    return (
        <main className={s.content}>
            <div>IMAGE Background</div>
            <div>AVA + Description</div>
            <MyPosts />
        </main>
    )
};