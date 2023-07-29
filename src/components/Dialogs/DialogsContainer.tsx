import {UserType} from 'appTypes/types';
import {AppStateType} from 'redux/redux-store';
import {connect} from 'react-redux';
import {Dialogs} from './Dialogs';
import {withAuthRedirect} from 'hoc/withAuthRedirect';
import {compose} from 'redux';
import {ComponentType} from 'react';

// Свойства
type MapStatePropsType = {
    users: Array<UserType>;
};
// Функция, которая возвращает необходимые компоненте данные из стейта
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.dialogsPage.users,
    };
};

const DialogsContainer = compose<ComponentType>(withAuthRedirect, connect(mapStateToProps))(Dialogs)
export default DialogsContainer