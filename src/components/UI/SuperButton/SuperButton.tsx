import React, { FC } from "react";
import s from "./SuperButton.module.css";

type SuperButtonPropsType = {
    title: string;
    type?:"button" | "submit" | "reset";
    disabled?: boolean;
    callback?: () => void;
    style?:string
};

export const SuperButton: FC<SuperButtonPropsType> = ({
    title,
    type,
    disabled,
    callback,
    style,
}) => {
    const btnStyle = style?s.btn+' '+style:s.btn

    return (
        <>
            <button
                className={btnStyle}
                type={type}
                disabled={disabled}
                onClick={callback}>
                {title}
            </button>
        </>
    );
};
