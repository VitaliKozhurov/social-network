import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {Post} from './Post/Post';
import ava from '../../assets/image/ninja.svg';

export const Profile = () => {
    return (
        <main className={s.content}>
            <div className={s.bgBody}>
                <div className={s.bg}></div>
            </div>
            <div className={s.userInfo}>
                <div className={s.avaBody}>
                    <img className={s.avatar} src={ava} alt="User Avatar" />      
                </div>
                <p className={s.descr}>Samurai is a great Japanese warrior.</p>
                </div>
            <MyPosts />
            <Post />
        </main>
    )
};