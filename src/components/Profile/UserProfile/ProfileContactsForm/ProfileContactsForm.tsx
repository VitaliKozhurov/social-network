import React, {FC, useState} from 'react';
import {UserProfileType} from '../../../../appTypes/types';
import {useFormik} from 'formik';
import s from './ProfileContactForm.module.css';
import {convertNullToStringInObject} from '../../../../utils/convertNullToStringInObject';
import * as Yup from 'yup';

type ProfileContactsForm = {
    profile: UserProfileType,
    updateUserInfo: (info: UserProfileType) => Promise<any>
    deactivateEditMode: () => void
}

const validationSchema = Yup.object({})

export const ProfileContactsForm: FC<ProfileContactsForm> = ({profile, updateUserInfo, deactivateEditMode}) => {
    const [errors, setErrors] = useState<string[]|null>();
    const initialValues = convertNullToStringInObject(profile)
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            updateUserInfo(values).then(res => {
                if (res.messages.length) {
                    const arr: string[] = res.messages
                    const errors = arr.map(error => {
                        if (error.includes('(Contacts->')) {
                            return error.split('(Contacts->').join('').slice(0, -1)
                        } else {
                            return error.split('.')[0]
                        }
                    })
                    setErrors(errors)
                }
                else{
                    setErrors(null)
                    deactivateEditMode();
                }
            })
        }
    })
    return (
        <form onSubmit={formik.handleSubmit} className={s.form}>
            <div className={s.formItem}>
                <span>About me: </span>
                <input type={'text'} {...formik.getFieldProps('aboutMe')} />
            </div>
            <div className={s.formItem}>
                <span>User name: </span>
                <input type={'text'} {...formik.getFieldProps('fullName')} />
            </div>
            <div className={s.formItemCheckbox}>
                <span>Looking for a job: </span>
                <input type={'checkbox'} {...formik.getFieldProps('lookingForAJob')} />
            </div>
            <div className={s.formItem}>
                <span>Looking for a description: </span>
                <textarea {...formik.getFieldProps('lookingForAJobDescription')} />
            </div>
            {Object.keys(profile.contacts).map(contact => {
                return <div key={contact} className={s.formItem}>
                    <span>{contact}</span>
                    <input type="text"  {...formik.getFieldProps('contacts.' + contact)} />
                </div>
            })}
            <button type={'submit'} className={s.btn}>Save info</button>

            {errors&&<div className={s.error}>
                {errors.map((error, index)=><p>{index+1}. {error}</p>)}
            </div>}
        </form>
    )
};
