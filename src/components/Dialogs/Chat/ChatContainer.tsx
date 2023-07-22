import { MessagesType, UserType } from 'appTypes/types';
import { AppStateType } from 'redux/redux-store';
import { dialogsActions } from 'redux/dialogsReducer';
import { connect } from "react-redux";
import { Chat } from "./Chat";
import {compose} from 'redux';
import {ComponentType} from 'react';
// Свойства
type MapStatePropsType = {
    users: Array<UserType>;
    messages: { [key: string]: Array<MessagesType> };
};
// Функция, которая возвращает необходимые компоненте данные из стейта
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.dialogsPage.users,
        messages: state.dialogsPage.messages
    };
};

export const ChatContainer = compose<ComponentType>(connect(mapStateToProps, { ...dialogsActions }))(Chat)