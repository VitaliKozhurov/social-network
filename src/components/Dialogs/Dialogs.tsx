import React from 'react';
import s from './Dialogs.module.css';
import {useParams} from 'react-router-dom';
import {ChatSelector} from './ChatSelector/ChatSelector';
import {Chat} from './Chat/Chat';
import {EmptyChat} from '../UI/EmptyChat/EmptyChat';

export type UserChatType = {
    userId: number
    userName: string
    userMessages: Array<string>
};

export type DialogsPropsType = {
    usersChats: Array<UserChatType>
}

export const Dialogs: React.FC<DialogsPropsType> = ({usersChats}) => {
    const params = useParams(); // get param from URL (if param change Dialogs rerender)
    const id = params.id ? Number(params.id) : 0;
    const usersList = usersChats.map(user => (
        {
            userId: user.userId,
            userName: user.userName
        }
    ));

    let resultChat: JSX.Element;
    if (id) {
        let userMessages = usersChats[id - 1].userMessages;
        let userName = usersChats[id - 1].userName;
        resultChat = <Chat messages={userMessages} name={userName} />
    } else{
        resultChat = <EmptyChat />
    }


    return (
        <div className={s.body}>
            <ChatSelector users={usersList} />
            {resultChat}
        </div>
    );
};
