import React, { FC } from "react";
import s from "./PostCreator.module.css";
import { MessageCreator } from "../../UI/MessageCreator/MessageCreator";
import { ActionType } from "../../../redux/state";

type AddPostPropsType = {
    title: string;
    value: string;
    placeholder: string;
    dispatch: (action: ActionType) => void;
};

export const AddPostComponent: FC<AddPostPropsType> = ({
    title,
    placeholder,
    dispatch,
    value,
}) => {
    return (
        <>
            <div className={s.myPostBody}>
                <h2 className={s.title}>{title}</h2>
                <MessageCreator
                    placeholder={placeholder}
                    value={value}
                    dispatch={dispatch}
                />
            </div>
        </>
    );
};
