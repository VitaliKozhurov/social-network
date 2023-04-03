import React from 'react';
import s from './MyPosts.module.css';

export const MyPosts = () => {
    return (
        <div className={s.myPostBody}>
            <h2 className={s.title}>My new post</h2>
            <input className={s.postInput} placeholder={'Enter you message post'} />
            <button>Add post</button>
        </div>
    )
};