import {ChangeEvent, FC} from 'react';
import s from './UserProfile.module.css';
import ava from '../../../assets/image/ninja.svg';
import {UserProfileType} from 'appTypes/types';
import {ProfileStatusWithHooks} from 'components/Profile/UserProfile/ProfileStatus/ProfileStatusWithHooks';

type UserProfilePropsType = {
    profile: UserProfileType
    profileStatus: string
    isOwner: boolean
    savePhoto: (file: File) => void
    updateUserStatus: (status: string) => void
};

export const UserProfile: FC<UserProfilePropsType> = ({
                                                          profile,
                                                          profileStatus,
                                                          isOwner,
                                                          updateUserStatus,
                                                          savePhoto
                                                      }) => {

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
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
                <p>
                    <span className={s.listTitle}>Looking for a job</span> :
                    {profile.lookingForAJob
                        ? ' Yes I am want to find new job on junior position ;)'
                        : ' No I am work now :)'}
                </p>
                <p><span className={s.listTitle}>Date of birth :</span></p>
                <p><span className={s.listTitle}>Date of birth :</span></p>
                <p><span className={s.listTitle}>City :</span></p>
                <p><span className={s.listTitle}>Education :</span></p>
            </div>
            {isOwner && <div className={s.photoLoader}>
                <h2 className={s.updatePhotoDescr}>Choose your photo for update</h2>
                <input type={'file'} onChange={onMainPhotoSelected} />
            </div>}
        </div>
    );
};
