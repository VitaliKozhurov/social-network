import React from 'react';
import s from './Dialogs.module.css';
import {useParams} from 'react-router-dom';
import {ChatSelector} from './ChatSelector/ChatSelector';
import {Chat} from './Chat/Chat';
import {EmptyChat} from '../UI/EmptyChat/EmptyChat';
import {DialogsPageType} from '../../App';
import {MessageCreator} from '../UI/MessageCreator/MessageCreator';

export type DialogsPropsType = {
    data: DialogsPageType
}

export const Dialogs: React.FC<DialogsPropsType> = ({data}) => {
    const {dialogs, messages} = data;
    const params = useParams(); // get param from URL (if param change Dialogs rerender)
    const id = params.id;

    let resultChat: JSX.Element;
    if (id) {
        let userMessages = messages[id]
        let userName = dialogs[+id - 1].userName;
        resultChat = <Chat messages={userMessages} name={userName} />

    } else {
        resultChat = <EmptyChat />
    }


    return (
        <div className={s.body}>
            <ChatSelector users={dialogs} />
            {resultChat}
        </div>
    );
};
