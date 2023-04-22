import React from 'react';
import {Post} from '../../UI/Post/Post';
import s from './Posts.module.css';
import {PostsType} from '../../../App';

type PostsPropsType = {
    posts: PostsType
}

export const Posts: React.FC<PostsPropsType> = ({posts}) => {

    const myPosts = posts.map(post => (
        <Post
            key={post.id}
            name={'Kozhurou Vitali'}
            message={post.message}
            likeCount={post.likeCount}
        />))

    return (
        <div className={s.postsBody}>
            <h3 className={s.title}>My Posts</h3>
            {myPosts}
        </div>
    );
};
