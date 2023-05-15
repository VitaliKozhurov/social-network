import React, {FC} from 'react';
import s from './PostCreator.module.css';
import {MessageCreator} from '../../UI/MessageCreator/MessageCreator';

type AddPostPropsType = {
    title: string;
    placeholder: string;
    value: string;
    addPost: (value: string) => void;
    updatePost: (value: string) => void;
};

export const AddPostComponent: FC<AddPostPropsType> = ({
                                                           title,
                                                           placeholder,
                                                           addPost,
                                                           updatePost,
                                                           value,
                                                       }) => {
    return (
        <>
            <div className={s.myPostBody}>
                <h2 className={s.title}>{title}</h2>
                <MessageCreator
                    placeholder={placeholder}
                    value={value}
                    addText={addPost}
                    updateText={updatePost}
                />
            </div>
        </>
    );
};
