import {UserProfileType} from '../../../../appTypes/types';
import {FC} from 'react';
import s from '../UserProfile.module.css';
import {SuperButton} from '../../../UI/SuperButton/SuperButton';

type ProfileUserInfoType = {
    profile: UserProfileType
    owner: boolean
    activeEditMode: () => void
}
export const ProfileUserInfo: FC<ProfileUserInfoType> = ({profile, owner, activeEditMode}) => {
    return <>
        <p>
            <span className={s.listTitle}>Looking for a job</span> :
            {profile.lookingForAJob
                ? ' Yes I am want to find new job for junior)'
                : ' No I am work now :)'}
        </p>
        {profile.lookingForAJob && <p>
            <span className={s.listTitle}>My skills</span> : {profile.lookingForAJobDescription}
        </p>}

        <div className={s.contacts}>My contacts:
            {
                profile.contacts && Object.keys(profile.contacts).map(contact => (
                    <Contact key={contact} contactTitle={contact} contactValue={profile.contacts[contact]}/>))
            }
        </div>
        {owner && <SuperButton title={'Edit contacts'} callback={activeEditMode} style={s.btn}/>}
    </>
}

type ContactPropsType = {
    contactTitle: string
    contactValue: string
}
const Contact: FC<ContactPropsType> = ({contactTitle, contactValue}) => {
    if (!contactValue) {
        return null
    }
    return <div>
        <span>{contactTitle} : {contactValue}</span>
    </div>
}