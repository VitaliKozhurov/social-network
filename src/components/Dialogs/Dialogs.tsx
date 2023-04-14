import React, { useState } from "react";
import s from "./Dialogs.module.css";
import { Post } from "../UI/Post/Post";
import { useParams } from "react-router-dom";
import { ChatSelector } from "./ChatSelector/ChatSelector";
import { Chat } from "./Chat/Chat";

export type UserType = {
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
    const id = params.id ? Number(params.id) : 0;

    return (
        <div className={s.body}>
            <ChatSelector users={userState} />
            <Chat users={userState} id={id} />
        </div>
    );
};
