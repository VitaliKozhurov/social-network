import React from 'react';
import s from './Dialogs.module.css';
import { Post } from '../Profile/MyPosts/Post/Post';

export const Dialogs = () => {
    return (
        <div className={s.body}>
            <div className={s.users}>
                <h2>Active users:</h2>
                <div className={s.user}>Dimych</div>
                <div className={s.user}>Alex</div>
            </div>
            <div className={s.messages}>
                <Post name={'Alex'} message={'Its my first message'} isLike={false}/>
             
            </div>
        </div>
    )
};