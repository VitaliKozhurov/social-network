import React, { useState } from "react";
import s from "./Dialogs.module.css";
import { Post } from "../UI/Post/Post";
import { useParams } from "react-router-dom";
import { ChatSelector } from "./ChatSelector/ChatSelector";

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

export const Dialogs: React.FC = () => {
    const [userState, setUserState] = useState<Array<UserType>>(inintUsers);
    const params = useParams(); // get param from URL (if param change Diaogs rerender)
    const id = params.id ? Number(params.id) : 1;

    const userChats = userState.map((user) => {
        const path = `/message/${user.userId}`;
        return (
            <ChatSelector id={user.userId} name={user.userName} path={path} />
        );
    });

    return (
        <div className={s.body}>
            <div className={s.users}>
                <h2>Chat with users:</h2>
                {userChats}
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
