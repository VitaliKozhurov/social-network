import React from "react";
import s from "./Dialogs.module.css";
import { Outlet } from "react-router-dom";
import { ChatSelector } from "./ChatSelector/ChatSelector";
import { DialogType } from "../../redux/state";

export type DialogsPropsType = {
    users: Array<DialogType>;
};

export const Dialogs: React.FC<DialogsPropsType> = ({ users }) => {
    return (
        <div className={s.body}>
            <ChatSelector users={users} />
            <Outlet />
        </div>
    );
};
