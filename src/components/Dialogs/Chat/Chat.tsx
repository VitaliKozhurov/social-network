import s from "./Chat.module.css";
import { Message } from "../../UI/Message/Message";
import { MessageCreator } from "../../UI/MessageCreator/MessageCreator";
import React from "react";
import { useParams } from "react-router-dom";
import { ActionType, DialogsPageType } from "../../../redux/state";

type ChatPropsType = {
    messages: DialogsPageType;
    dispatch: (action: ActionType) => void;
};

export const Chat: React.FC<ChatPropsType> = ({ messages, dispatch }) => {
    const params = useParams(); // get param from URL (if param change Dialogs rerender)
    const id = params.id ? params.id : "1";
    const userName = messages.dialogs[+id - 1].userName;

    const userMessages = messages.messages[id].map((message, ind) => (
        <Message key={ind} message={message} name={userName} />
    ));

    return (
        <div className={s.messagesBody}>
            <div className={s.messages}>{userMessages}</div>
            <MessageCreator
                placeholder={"Enter your message"}
                dispatch={dispatch}
                value={"qwr"}
            />
        </div>
    );
};
