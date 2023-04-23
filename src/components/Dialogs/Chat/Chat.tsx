import s from './Chat.module.css';
import {Message} from '../../UI/Message/Message';
import {MessageCreator} from '../../UI/MessageCreator/MessageCreator';
import React from 'react';

type ChatPropsType = {
    messages: Array<string>
    name: string
};

export const Chat: React.FC<ChatPropsType> = ({messages, name}) => {

    const userMessages = messages.map((message, ind) => <Message key={ind}  message={message} name={name} />);

    return (
        <div className={s.messagesBody}>
            <div className={s.messages}>
                {userMessages}
            </div>
            <MessageCreator placeholder={'Enter your message'}/>
        </div>

    );
};
