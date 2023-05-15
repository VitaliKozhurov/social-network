import {MessagesType, UserType} from '../../../appTypes/types';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';
import {addMessageAC, updateMessageAC} from '../../../redux/dialogsReducer';
import {connect} from 'react-redux';
import {Chat} from './Chat';
// Свойства
type MapStatePropsType = {
    users: Array<UserType>
    messages: { [key: string]: Array<MessagesType> }
    newMessageBody:string
}
// Функция, которая возвращает необходимые компоненте данные из стейта
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.dialogsPage.users,
        messages: state.dialogsPage.messages,
        newMessageBody:state.dialogsPage.newMessageBody
    }
}

type MapDispatchPropsType = {
    addMessage: (value: string, id: string) => void
    updateMessage: (value: string) => void
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessage: (value: string, id: string) => {
            dispatch(addMessageAC(value, id))
        },
        updateMessage: (value: string) => {
            dispatch(updateMessageAC(value))
        }
    }
}

export const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);