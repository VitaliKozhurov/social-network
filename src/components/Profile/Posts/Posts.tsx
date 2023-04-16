import React from 'react';
import {Post} from '../../UI/Post/Post';
import s from './Posts.module.css';

export type PostType = {
    id: number
    message: string
    likeCount: number
}

export type UserPostType = {
    name: string,
    posts: Array<PostType>
}

export type PostsPropsType = {
    userPosts: UserPostType
}

export const Posts: React.FC<PostsPropsType> = ({userPosts}) => {

    const myPosts = userPosts.posts.map(post => (
        <Post
            key={post.id}
            name={userPosts.name}
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
