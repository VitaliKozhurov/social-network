import React, { FC } from "react";
import s from "./SuperButton.module.css";

type SuperButtonPropsType = {
    title: string;
    disabled?: boolean;
    callback: () => void;
};

export const SuperButton: FC<SuperButtonPropsType> = ({
    title,
    disabled,
    callback,
}) => {
    return (
        <>
            <button className={s.btn} disabled={disabled} onClick={callback}>
                {title}
            </button>
        </>
    );
};
