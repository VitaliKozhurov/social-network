import React, { FC } from "react";
import s from "./Message.module.css";
import avatar from "../../../assets/image/samurai-user.png";

type MessagePropsType = {
    message: string;
    name: string;
};

export const Message: FC<MessagePropsType> = ({name, message}) => {
    return (
        <div className={s.postBody}>
            <div className={s.userInfo}>
                <div className={s.avaUser}>
                    <img className={s.avatar} src={avatar} alt="User Avatar" />
                </div>
                <h3 className={s.name}>{name}</h3>
            </div>
            <p className={s.text}>{message}</p>
        </div>
    );
};