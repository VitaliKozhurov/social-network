import React from 'react';
import s from './Dialogs.module.css';
import {Outlet} from 'react-router-dom';
import {ChatSelector} from './ChatSelector/ChatSelector';
import {StoreContext} from '../../StoreContext';

export const Dialogs = () => {
    return (
        <div className={s.body}>
            <StoreContext.Consumer>
                {
                    (store) => <ChatSelector users={store.getState().dialogsPage.users} />
                }
            </StoreContext.Consumer>
            <Outlet />
        </div>
    );
};
