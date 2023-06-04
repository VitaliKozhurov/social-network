import React, {FC} from 'react';
import s from './UserProfile.module.css';
import ava from '../../../assets/image/ninja.svg';

type UserProfilePropsType = {
    profile: any
}

export const UserProfile: FC<UserProfilePropsType> = ({profile}) => {

    return (
        <div className={s.userInfo}>
            <div className={s.avaBody}>
                <img className={s.avatar} src={profile.photos.small ? profile.photos.small : ava} alt="User Avatar" />
            </div>
            <div className={s.descr}>
                <h2>Kozhurou Vitali (samurai)</h2>
                <p>Date of birth: 24.02.1992</p>
                <p>City: Minsk</p>
                <p>Education: BSUIR</p>
            </div>
        </div>
    )
};