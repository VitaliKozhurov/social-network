import React, {FC, useRef} from 'react';
import s from './MessageCreator.module.css';
import {SuperButton} from '../SuperButton/SuperButton';

type MessageCreatorPropsType = {
    placeholder:string
}

export const MessageCreator:FC<MessageCreatorPropsType> = ({placeholder}) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);  // Link to textarea element

    const addPostHandler = () =>{
        console.log(textAreaRef.current?.value)
    }

    return (
        <>
            <div className={s.postForm}>
                    <textarea
                        ref={textAreaRef}
                        className={s.postText}
                        placeholder={placeholder}
                    />
                <SuperButton title={'Add Post'} callback={addPostHandler} />
            </div>
        </>
    )
};