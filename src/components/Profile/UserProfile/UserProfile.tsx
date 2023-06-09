import React, { FC } from "react";
import s from "./UserProfile.module.css";
import ava from "../../../assets/image/ninja.svg";
import { UserProfileType } from "../../../appTypes/types";

type UserProfilePropsType = {
    profile: UserProfileType;
};

export const UserProfile: FC<UserProfilePropsType> = ({ profile }) => {
    return (
        <div className={s.userInfo}>
            <div className={s.avaBody}>
                <img
                    className={s.avatar}
                    src={profile.photos ? profile.photos.small : ava}
                    alt="User Avatar"
                />
            </div>
            <div className={s.descr}>
                <h2>{profile.fullName} (samurai)</h2>
                <p>
                    Looking for a job: <br />
                    {profile.lookingForAJob
                        ? "Yes I am want to find new job on junior position ;)"
                        : "No I am work now :)"}
                </p>
                <p>Date of birth: </p>
                <p>City: </p>
                <p>Education: </p>
            </div>
        </div>
    );
};
