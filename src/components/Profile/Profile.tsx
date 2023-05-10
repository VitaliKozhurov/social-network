import React from "react";
import s from "./Profile.module.css";
import { UserProfile } from "./UserProfile/UserProfile";
import { AddPostComponent } from "./AddPostComponent/AddPostComponent";
import { Posts } from "./Posts/Posts";
import {
    ActionType,
    PostsPageType,
    addPostAC,
    updatePostAC,
} from "../../redux/state";

type ProfilePropsType = {
    data: PostsPageType;
    dispatch: (action: ActionType) => void;
};

export const Profile: React.FC<ProfilePropsType> = ({ data, dispatch }) => {
    const addPost = (value: string) => {
        dispatch(addPostAC(value));
    };
    const updatePost = (value: string) => {
        dispatch(updatePostAC(value));
    };
    return (
        <div>
            <div className={s.bgBody}>
                <div className={s.bg}></div>
            </div>
            <UserProfile />
            <AddPostComponent
                title={"My new Post"}
                value={data.newPostText}
                placeholder={"Enter your message post"}
                addPost={addPost}
                updatePost={updatePost}
            />
            <Posts posts={data.posts} />
        </div>
    );
};
