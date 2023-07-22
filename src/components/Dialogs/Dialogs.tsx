import React, {FC} from 'react';
import s from './Dialogs.module.css';
import {Outlet} from 'react-router-dom';
import {ChatSelector} from './ChatSelector/ChatSelector';
import {UserType} from 'appTypes/types';

type DialogsPropsType = {
    users:Array<UserType>
}

export const Dialogs:FC<DialogsPropsType> = ({users}) => {
    return (
        <div className={s.body}>
            <ChatSelector users={users} />
            <Outlet />
        </div>
    );
};
