import React, { FC } from "react";
import s from "./SuperButton.module.css";

type SuperButtonPropsType = {
    title: string;
    disabled?: boolean;
    callback: () => void;
    style?:string
};

export const SuperButton: FC<SuperButtonPropsType> = ({
    title,
    disabled,
    callback,
    style,
}) => {
    const btnStyle = style?s.btn+' '+style:s.btn

    return (
        <>
            <button className={btnStyle} disabled={disabled} onClick={callback}>
                {title}
            </button>
        </>
    );
};
