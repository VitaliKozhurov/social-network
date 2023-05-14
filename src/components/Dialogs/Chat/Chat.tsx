import s from './Chat.module.css';
import {Message} from '../../UI/Message/Message';
import {MessageCreator} from '../../UI/MessageCreator/MessageCreator';
import React from 'react';
import {useParams} from 'react-router-dom';
import {addMessageAC, updateMessageAC} from '../../../redux/dialogsReducer';
import {StoreContext} from '../../../StoreContext';



export const Chat = () => {
    const params = useParams(); // get param from URL (if param change Dialogs rerender)
    const id = params.id ? params.id : '1';

    return (
        <div className={s.messagesBody}>
            <StoreContext.Consumer>
                {
                    (store) => {
                        const userName: string = store.getState().dialogsPage.users.filter((user) => user.userId === id)[0].userName;
                        const userMessages = store.getState().dialogsPage.messages[id].map((message, ind) => (
                            <Message
                                key={ind}
                                message={message.message}
                                name={userName}
                                owner={message.owner}
                            />
                        ));
                        const addMessage = (value: string) => {
                            store.dispatch(addMessageAC(value, id));
                        };
                        const updateMessage = (value: string) => {
                            store.dispatch(updateMessageAC(value));
                        };

                        return (
                            <>
                                <div className={s.messages}>{userMessages}</div>
                                <MessageCreator
                                    placeholder={'Enter your message'}
                                    addText={addMessage}
                                    updateText={updateMessage}
                                    value={store.getState().dialogsPage.newMessageBody}
                                />
                            </>
                        )
                    }
                }
            </StoreContext.Consumer>
        </div>
    );
};
