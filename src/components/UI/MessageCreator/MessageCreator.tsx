import React, { ChangeEvent, FC, useRef } from "react";
import s from "./MessageCreator.module.css";
import { SuperButton } from "../SuperButton/SuperButton";
import { ActionType } from "../../../redux/state";

type MessageCreatorPropsType = {
    placeholder: string;
    value: string;
    dispatch: (action: ActionType) => void;
};

export const MessageCreator: FC<MessageCreatorPropsType> = ({
    placeholder,
    value,
    dispatch,
}) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null); // Link to textarea element

    const addPostHandler = () => {
        dispatch({ type: "ADD-POST" });
    };

    const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch({
            type: "UPDATE-POST-MESSAGE",
            payload: e.currentTarget.value,
        });
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
                <SuperButton title={"Add Post"} callback={addPostHandler} />
            </div>
        </>
    );
};
