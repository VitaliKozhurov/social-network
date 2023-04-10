import React, { useState } from "react";
import s from "./Dialogs.module.css";
import { Post } from "../Profile/MyPosts/Post/Post";
import { NavLink, Route, Routes, useParams } from "react-router-dom";

type UserType = {
    userId: string;
    userName: string;
    userMessages: string;
};
const inintUsers: Array<UserType> = [
    {
        userId: "1",
        userName: "Dimych",
        userMessages: "Hello Im Dimych. I love React",
    },
    {
        userId: "2",
        userName: "Viktor",
        userMessages: "Hello Im Viktor. I love native JS",
    },
];

const UserNameChat = (props) => {
    <div className={s.user} key={user.userId}>
        <NavLink
            to={path}
            className={({ isActive }) =>
                isActive ? s.link + " " + s.active : s.link
            }
        >
            {user.userName}
        </NavLink>
    </div>;
};

export const Dialogs = () => {
    const [userState, setUserState] = useState<Array<UserType>>(inintUsers);
    const params = useParams();
    const id = params.id ? Number(params.id) : 1;

    return (
        <div className={s.body}>
            <div className={s.users}>
                <h2>Chat with users:</h2>
                {userState.map((user) => {
                    const path = `/message/${user.userId}`;
                    return <UserNameChat />;
                })}
            </div>
            <div className={s.messages}>
                <Post
                    name={userState[id - 1].userName}
                    message={userState[id - 1].userMessages}
                    isLike={false}
                />
            </div>
        </div>
    );
};
