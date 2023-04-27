import React, {FC} from 'react';
import s from './PostCreator.module.css';
import {MessageCreator} from '../../UI/MessageCreator/MessageCreator';

type AddPostPropsType = {
    title: string
    placeholder: string
    addPost: (value: string) => void
}

export const AddPostComponent: FC<AddPostPropsType> = ({title, placeholder, addPost}) => {

    return (
        <>
            <div className={s.myPostBody}>
                <h2 className={s.title}>{title}</h2>
                <MessageCreator placeholder={placeholder} addPost={addPost} />
            </div>
        </>
    );
};