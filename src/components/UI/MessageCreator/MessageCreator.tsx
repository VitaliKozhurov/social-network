import React, {ChangeEvent, FC, useRef} from 'react';
import s from './MessageCreator.module.css';
import {SuperButton} from '../SuperButton/SuperButton';

type MessageCreatorPropsType = {
    placeholder: string;
    value: string;
    addText: (value: string) => void;
    updateText: (value: string) => void;
};

export const MessageCreator: FC<MessageCreatorPropsType> = ({
                                                                placeholder,
                                                                value,
                                                                addText,
                                                                updateText,
                                                            }) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null); // Link to textarea element

    const addPostHandler = () => {
        if (textAreaRef.current) addText(textAreaRef.current.value);
    };

    const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateText(e.currentTarget.value);
    };

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
    );
};
