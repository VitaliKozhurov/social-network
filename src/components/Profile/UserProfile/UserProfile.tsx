import {ChangeEvent, FC, useState} from 'react';
import s from './UserProfile.module.css';
import ava from '../../../assets/image/ninja.svg';
import {UserProfileType} from 'appTypes/types';
import {ProfileStatusWithHooks} from 'components/Profile/UserProfile/ProfileStatus/ProfileStatusWithHooks';
import {ProfileContactsForm} from './ProfileContactsForm/ProfileContactsForm';
import {ProfileUserInfo} from './ProfileInfo/ProfileInfo';

type UserProfilePropsType = {
    profile: UserProfileType
    profileStatus: string
    isOwner: boolean
    savePhoto: (file: File) => void
    updateUserStatus: (status: string) => void
    updateUserInfo:(info:UserProfileType)=>Promise<any>
};

export const UserProfile: FC<UserProfilePropsType> = ({
                                                          profile,
                                                          profileStatus,
                                                          isOwner,
                                                          updateUserStatus,
                                                          savePhoto,
    updateUserInfo
                                                      }) => {
    const [editMode, setEditMode] = useState(false);

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }
    const activeEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
    }
    return (
        <div className={s.userInfo}>
            <div className={s.avaBody}>
                <img className={s.avatar} src={profile.photos && profile.photos.large ? profile.photos.large : ava}
                     alt="User Avatar" />
            </div>
            <div className={s.descr}>
                <h2>{profile.fullName} (samurai)</h2>
                <ProfileStatusWithHooks status={profileStatus} updateUserStatus={updateUserStatus} />
                {editMode
                    ? <ProfileContactsForm profile={profile} updateUserInfo={updateUserInfo} deactivateEditMode={deactivateEditMode}/>
                    : <ProfileUserInfo profile={profile} owner={isOwner} activeEditMode={activeEditMode} />}
            </div>
            {isOwner && <div className={s.photoLoader}>
                <h2 className={s.updatePhotoDescr}>Choose your photo for update</h2>
                <input type={'file'} onChange={onMainPhotoSelected} />
            </div>}
        </div>
    );
};

