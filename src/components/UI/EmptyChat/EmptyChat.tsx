import React from 'react';
import s from './EmptyChat.module.css';
import emptyChat from '../../../assets/image/usersChat.svg';

export const EmptyChat = () => {
    return (
        <>
            <div className={s.body}>
                <img src={emptyChat} alt="Empty users chat" />
                <h3 className={s.text}> Choose user for chat</h3>
            </div>
        </>
    )
};