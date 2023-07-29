import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import s from 'components/Profile/UserProfile/ProfileStatus/ProfileStatus.module.css';

type ProfileStatusType = {
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileStatusWithHooks: FC<ProfileStatusType> = ({status, updateUserStatus}) => {

    const [editMode, setEditMode] = useState<boolean>(false);
    const [textStatus, setTextStatus] = useState<string>(status);

    useEffect(()=>{
        setTextStatus(status)
    },[status])
    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setTextStatus(e.currentTarget.value)
    }
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        updateUserStatus(textStatus)
    }

    return (
        <>
            <div className={s.body}>
                <p className={s.title}>My status</p> : {
                editMode
                    ? <input className={s.statusInput} onBlur={deactivateEditMode}
                             value={textStatus} onChange={onChangeStatus} autoFocus />
                    : <span className={s.statusSpan}
                            onDoubleClick={activateEditMode}>
                        {status || 'No status'}
                </span>
            }
            </div>
        </>
    )
};