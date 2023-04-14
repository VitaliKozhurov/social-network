import React from "react";
import s from "./Profile.module.css";
import { UserProfile } from "./UserProfile/UserProfile";
import { PostCreator } from "./PostCreator/PostCreator";
import { Posts } from "./Posts/Posts";

export const Profile: React.FC = () => {
    return (
        <div>
            <div className={s.bgBody}>
                <div className={s.bg}></div>
            </div>
            <UserProfile />
            <PostCreator />
            <Posts />
        </div>
    );
};
