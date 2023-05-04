import React from "react";
import s from "./Profile.module.css";
import { UserProfile } from "./UserProfile/UserProfile";
import { AddPostComponent } from "./AddPostComponent/AddPostComponent";
import { Posts } from "./Posts/Posts";
import { PostsPageType } from "../../redux/state";

type ProfilePropsType = {
    data: PostsPageType;
    addPost: () => void;
    changeText: (value: string) => void;
};

export const Profile: React.FC<ProfilePropsType> = ({
    data,
    addPost,
    changeText,
}) => {
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
                changeText={changeText}
            />
            <Posts posts={data.posts} />
        </div>
    );
};
