import {PostType} from 'appTypes/types';
import {AppStateType} from 'redux/redux-store';
import {Posts} from './Posts';
import {connect} from 'react-redux';

type MapStatePropsType = {
    posts: Array<PostType>
}
// Функция, которая возвращает необходимые компоненте данные из стейта
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts
    }
}

export const PostsContainer = connect(mapStateToProps)(Posts);