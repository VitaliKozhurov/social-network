import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {Post} from './MyPosts/Post/Post';
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
                <div className={s.descr}>
                    <h2>Kozhurou Vitali (samurai)</h2>
                    <p>Date of birth: 24.02.1992</p>
                    <p>City: Minsk</p>
                    <p>Education: BSUIR</p>
                </div>
            </div>
            <MyPosts />
        </main>
    )
};