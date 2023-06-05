import { UserType } from "../../appTypes/types";
import { AppStateType } from "../../redux/redux-store";
import { connect } from "react-redux";
import { Dialogs } from "./Dialogs";

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

export const DialogsContainer = connect<
    MapStatePropsType,
    {},
    {},
    AppStateType
>(mapStateToProps)(Dialogs);
