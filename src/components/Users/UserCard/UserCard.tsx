import React, {FC} from 'react';
import s from './UserCard.module.css';
import avatar from '../../../assets/image/samurai-user.png';
import bg from '../../../assets/image/friends-bg.jpg';
import {SuperButton} from '../../UI/SuperButton/SuperButton';

type UserCardPropsType = {
    name: string
    photo: string | null
    status: string
    followed: boolean
    onFollowButtonHandler: () => void
}

export const UserCard: FC<UserCardPropsType> = ({name, photo, status, followed, onFollowButtonHandler}) => {
    return (
        <div className={s.userBody}>
            <div className={s.cardBG}>
                <img src={bg} alt="Background card" />
                <div className={s.avatar}>
                    {photo ? (
                        <img src={photo} alt="Avatar" />
                    ) : (
                        <img src={avatar} alt="Avatar" />
                    )}
                </div>
            </div>
            <h3 className={s.userName}>{name}</h3>
            <p className={s.status}>My status: {status}</p>
            <SuperButton title={followed ? 'Unfollow' : 'Follow'} callback={onFollowButtonHandler} style={s.btnStyle}/>
        </div>
    )
};