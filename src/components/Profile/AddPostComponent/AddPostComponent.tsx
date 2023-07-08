import React, {FC} from 'react';
import { MessageCreator } from '../../UI/MessageCreator/MessageCreator';
import s from './PostCreator.module.css';

type AddPostPropsType = {
    title: string;
    placeholder: string;
    addPost: (value: string) => void;
};

export const AddPostComponent: FC<AddPostPropsType> = ({
                                                           title,
                                                           placeholder,
                                                           addPost
                                                       }) => {
    return (
        <>
            <div className={s.myPostBody}>
                <h2 className={s.title}>{title}</h2>
                <MessageCreator
                    title={'Add post'}
                    placeholder={placeholder}
                    addText={addPost}
                />
            </div>
        </>
    );
};
