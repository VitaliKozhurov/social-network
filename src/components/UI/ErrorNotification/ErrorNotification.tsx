import React, {FC, useEffect, useState} from 'react';
import s from './ErrorNotification.module.css';
type Props = {
    isAppError:string|null
    setAppErrorStatus:(status:string|null)=>void
}

export const ErrorNotification:FC<Props> = ({isAppError,setAppErrorStatus}) => {
    const [timerId, setTimerId] = useState<number|undefined>(undefined);

    useEffect(()=>{
        const timer = window.setTimeout(()=>{
            setAppErrorStatus(null)
        },5000)
        setTimerId(timer);

        return ()=>{clearTimeout(timerId)}
    },[isAppError])


    return (
        <>
            <div className={s.body}>{isAppError}</div>
        </>
    )
};