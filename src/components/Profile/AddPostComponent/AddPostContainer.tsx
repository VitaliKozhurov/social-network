import {AddPostComponent} from './AddPostComponent';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {profileActions} from '../../../redux/profileReducer';

type MapStatePropsType = {
    title: string;
    placeholder: string;
    value: string;
};
// Функция, которая возвращает необходимые компоненте данные из стейта
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        title: 'Create new post',
        placeholder: 'Write something here...',
        value: state.profilePage.newPostText,
    };
};

export const AddPostContainer = connect(mapStateToProps, {...profileActions})(AddPostComponent);
