import React from 'react';
import s from './Login.module.css';
import {Field, Form, Formik, FormikProps} from 'formik';
import * as Yup from 'yup';
import {SuperButton} from '../UI/SuperButton/SuperButton';

type InitialStateType = {
    login: string
    password: string
    rememberMe: boolean
}

const initialValues = {
    login: '',
    password: '',
    rememberMe: false
}
const validationSchema = Yup.object({
    login: Yup.string().required('Field can not be empty!'),
    password: Yup.string().required('Field can not be empty!'),
    rememberMe: Yup.boolean().required('Field can not be empty!'),
})

export const Login = () => {
    return (
        <>
            <h1 className={s.title}>Login In</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, {resetForm}) => {
                    console.log(values);
                    resetForm();
                }}
            >
                {(formProps: FormikProps<InitialStateType>) => {
                    console.log(formProps)
                    return (
                        <Form className={s.formBody} onSubmit={formProps.handleSubmit}>
                            <div className={s.formElement}>
                                <h3>Login</h3>
                                <Field
                                    className={s.formInput}
                                    name={'login'}
                                    type="text"
                                />
                            </div>
                            <div className={s.formElement}>
                                <h3>Password</h3>
                                <Field
                                    className={s.formInput}
                                    name={'password'}
                                    type="text"
                                />
                            </div>
                            <div className={s.formCheckbox}>
                                <h3>Remember me</h3>
                                <Field className={s.checkbox} name={'rememberMe'} type="checkbox" />
                            </div>
                            <div className={s.formSubmit}>
                                <SuperButton
                                    title={'Login'}
                                    type={'submit'}
                                    style={s.btnStyle}
                                />
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </>
    )
};