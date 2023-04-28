import React, {FC} from 'react';
import s from './PostCreator.module.css';
import {MessageCreator} from '../../UI/MessageCreator/MessageCreator';
import {changeText} from '../../../redux/state';

type AddPostPropsType = {
    title: string
    value: string
    placeholder: string
    addPost: () => void
    changeText: (value: string) => void
}

export const AddPostComponent: FC<AddPostPropsType> = ({title, placeholder, addPost, value}) => {

    return (
        <>
            <div className={s.myPostBody}>
                <h2 className={s.title}>{title}</h2>
                <MessageCreator placeholder={placeholder} value={value} addPost={addPost} changeText={changeText} />
            </div>
        </>
    );
};
