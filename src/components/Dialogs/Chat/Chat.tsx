import s from "./Chat.module.css";
import { Message } from "../../UI/Message/Message";
import { MessageCreator } from "../../UI/MessageCreator/MessageCreator";
import React from "react";
import { useParams } from "react-router-dom";
import {
    ActionType,
    DialogsPageType,
    addMessageAC,
    updateMessageAC,
} from "../../../redux/state";

type ChatPropsType = {
    dialogs: DialogsPageType;
    dispatch: (action: ActionType) => void;
};

export const Chat: React.FC<ChatPropsType> = ({ dialogs, dispatch }) => {
    const params = useParams(); // get param from URL (if param change Dialogs rerender)
    const id = params.id ? params.id : "1";
    const userName: string = dialogs.users.filter(
        (user) => user.userId === id
    )[0].userName;

    const userMessages = dialogs.messages[id].map((message, ind) => (
        <Message
            key={ind}
            message={message.message}
            name={userName}
            owner={message.owner}
        />
    ));

    const addMessage = (value: string) => {
        dispatch(addMessageAC(value, id));
    };
    const updateMessage = (value: string) => {
        dispatch(updateMessageAC(value));
    };

    return (
        <div className={s.messagesBody}>
            <div className={s.messages}>{userMessages}</div>
            <MessageCreator
                placeholder={"Enter your message"}
                addText={addMessage}
                updateText={updateMessage}
                value={dialogs.newMessageBody}
            />
        </div>
    );
};
