import s from './Chat.module.css';
import {Message} from '../../UI/Message/Message';
import {MessageCreator} from '../../UI/MessageCreator/MessageCreator';
import React, {FC} from 'react';
import {useParams} from 'react-router-dom';
import {MessagesType, UserType} from 'appTypes/types';

type ChatPropsType = {
    users:Array<UserType>
    messages:{ [key: string]: Array<MessagesType> }
    addMessage: (value: string, id: string) => void
}

export const Chat:FC<ChatPropsType> = ({users,messages,addMessage}) => {
    const params = useParams(); // get param from URL (if param change Dialogs rerender)
    const id = params.id ? params.id : '1';

    const userName: string = users.filter((user) => user.userId === id)[0].userName;
    const userMessages = messages[id].map((message, ind) => (
        <Message
            key={ind}
            message={message.message}
            name={userName}
            owner={message.owner}
        />
    ));

    const addMessageHandler = (value: string) => {
       addMessage(value, id);
    };

    return (
        <div className={s.messagesBody}>
            <div className={s.messages}>{userMessages}</div>
            <MessageCreator
                title={'Add message'}
                placeholder={'Enter your message'}
                addText={addMessageHandler}
            />
        </div>
    );
};
