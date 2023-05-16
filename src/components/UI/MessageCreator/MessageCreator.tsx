import React, { ChangeEvent, FC, useState } from "react";
import s from "./MessageCreator.module.css";
import { SuperButton } from "../SuperButton/SuperButton";

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
    const [error, setError] = useState<boolean>(false);

    const addPostHandler = () => {
        if (value.trim()) {
            addText(value);
        } else {
            setError(true);
        }
    };

    const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        error && setError(false);
        updateText(e.currentTarget.value);
    };

    const style = error ? s.postText + " " + s.error : s.postText;
    const placeholderForTextField = error
        ? "Field can not be empty"
        : placeholder;

    return (
        <>
            <div className={s.postForm}>
                <textarea
                    className={style}
                    placeholder={placeholderForTextField}
                    value={value}
                    onChange={onChangeText}
                />
                <SuperButton
                    title={"Add Post"}
                    disabled={error}
                    callback={addPostHandler}
                />
            </div>
        </>
    );
};
