import React, {ChangeEvent, FC, useRef} from 'react';
import s from './MessageCreator.module.css';
import {SuperButton} from '../SuperButton/SuperButton';
import {changeText} from '../../../redux/state';

type MessageCreatorPropsType = {
    placeholder: string
    value: string
    addPost: () => void
    changeText: (value: string) => void
}

export const MessageCreator: FC<MessageCreatorPropsType> = ({placeholder, value, addPost}) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);  // Link to textarea element

    const addPostHandler = () => {
            addPost();
    }

    const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changeText(e.currentTarget.value);
    }

    return (
        <>
            <div className={s.postForm}>
                    <textarea
                        ref={textAreaRef}
                        className={s.postText}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChangeText}
                    />
                <SuperButton title={'Add Post'} callback={addPostHandler} />
            </div>
        </>
    )
};