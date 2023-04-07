import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';

export const MyPosts = () => {
    return (
        <>
            <div className={s.myPostBody}>
                <h2 className={s.title}>My new post</h2>
                <div className={s.postForm}>
                    <textarea className={s.postText} placeholder={'Enter you message post'} />
                    <button className={s.btn}>Add post</button>
                </div>
            </div>
            <div className={s.postsBody}>
                <Post name={'Alex'} message={'Hello my friend! How are you?'} isLike={true} />
                <Post name={'Vitalik'} message={`Hi I'm stady in It-incubator. It's the best community in the world))`} isLike={true} />
            </div>
        </>

    )
};