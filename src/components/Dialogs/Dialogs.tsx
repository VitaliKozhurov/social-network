import React from "react";
import s from "./Dialogs.module.css";
import { Outlet } from "react-router-dom";
import { ChatSelector } from "./ChatSelector/ChatSelector";
import { UserType } from "../../redux/store";

export type DialogsPropsType = {
    users: Array<UserType>;
};

export const Dialogs: React.FC<DialogsPropsType> = ({ users }) => {
    return (
        <div className={s.body}>
            <ChatSelector users={users} />
            <Outlet />
        </div>
    );
};
