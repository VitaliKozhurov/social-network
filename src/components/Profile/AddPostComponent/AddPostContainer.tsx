import { AddPostComponent } from "./AddPostComponent";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/redux-store";
import { addPostAC, updatePostAC } from "../../../redux/profileReducer";
import { Dispatch } from "redux";

type MapStatePropsType = {
    title: string;
    placeholder: string;
    value: string;
};
// Функция, которая возвращает необходимые компоненте данные из стейта
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        title: "Create new post",
        placeholder: "Write something here...",
        value: state.postsPage.newPostText,
    };
};

type MapDispatchPropsType = {
    addPost: (value: string) => void;
    updatePost: (value: string) => void;
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: (value: string) => {
            dispatch(addPostAC(value));
        },
        updatePost: (value: string) => {
            dispatch(updatePostAC(value));
        },
    };
};

export const AddPostContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddPostComponent);
