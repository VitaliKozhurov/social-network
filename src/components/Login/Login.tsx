import React, {FC} from 'react';
import s from './Login.module.css';
import {Field, Form, Formik, FormikProps} from 'formik';
import * as Yup from 'yup';
import {SuperButton} from '../UI/SuperButton/SuperButton';
import {Navigate} from 'react-router-dom';
import {Preloader} from '../UI/Preloader/Preloader';

type FormField = {
    title: string
    name: string
    type: string
    style: string
    placeholder?: string
    touched: boolean | undefined
    error: string | undefined
}
const CustomField: FC<FormField> = ({title, name, type, style, placeholder, touched, error}) => {
    const isError = !!error;
    const isTouched = !!touched;
    const elemStyle = style + ' ' + (!isError && isTouched ? s.success : '') + ' ' + (isError && isTouched ? s.error : '')

    return (
        <>
            <h3>{title}</h3>
            <Field
                className={elemStyle}
                name={name}
                type={type}
                placeholder={isError && isTouched ? error : placeholder}
            />
            {type === 'checkbox' && isError && isTouched ? <span className={s.errorCheckbox}>{error}</span> : null}
        </>
    )
}

type InitialStateType = {
    email: string
    password: string
    captcha: string
    rememberMe: boolean
}

const initialValues = {
    email: '',
    password: '',
    captcha: '',
    rememberMe: false
}


type LoginPropsType = {
    isAuth: boolean
    isFetching: boolean
    error: string
    captchaURL: string
    login: (email: string, password: string, rememberMe: boolean, captcha?: string) => void
}

export const Login: FC<LoginPropsType> = ({isAuth, isFetching, error, login, captchaURL}) => {

    const validationSchema = Yup.object({
        email: Yup.string().required('Field can not be empty!').email('Invalid email format!'),
        password: Yup.string().required('Field can not be empty!'),
        captcha: !!captchaURL?Yup.string().required('Field is required'):Yup.string().notRequired()
    })

    if (isAuth) {
        return <Navigate to={'/profile'} />
    }
    return (
        isFetching
            ? <Preloader />
            : <>
                <h1 className={s.title}>Login In</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, {resetForm}) => {

                        login(values.email, values.password, values.rememberMe, values.captcha )
                        resetForm();
                    }}
                >
                    {(formProps: FormikProps<InitialStateType>) => {
                        return (
                            <Form className={s.formBody} onSubmit={formProps.handleSubmit}>
                                <div className={s.formElement}>
                                    <CustomField
                                        title={'Email'}
                                        type={'text'}
                                        name={'email'}
                                        style={s.formInput}
                                        error={formProps.errors.email}
                                        touched={formProps.touched.email}
                                        placeholder={'Enter email'}
                                    />
                                </div>
                                <div className={s.formElement}>
                                    <CustomField
                                        title={'Password'}
                                        type={'password'}
                                        name={'password'}
                                        style={s.formInput}
                                        error={formProps.errors.password}
                                        touched={formProps.touched.password}
                                        placeholder={'Enter password'}
                                    />
                                </div>
                                <div className={s.formCheckbox}>
                                    <CustomField
                                        title={'Remember me'}
                                        type={'checkbox'}
                                        name={'rememberMe'}
                                        style={s.checkbox}
                                        error={formProps.errors.rememberMe}
                                        touched={formProps.touched.rememberMe}
                                    />
                                </div>
                                {
                                    !!captchaURL&& <>
                                        <div className={s.captchaImg}>
                                            <img src={captchaURL} alt="Captcha url" />
                                        </div>
                                        <div className={s.captchaInput}>
                                            <CustomField
                                                title={'Fill the captcha field'}
                                                type={'text'}
                                                name={'captcha'}
                                                style={s.formInput}
                                                error={formProps.errors.captcha}
                                                touched={formProps.touched.captcha}
                                            />
                                        </div>
                                    </>

                                }
                                <div className={s.formSubmit}>
                                    <SuperButton
                                        title={'Login'}
                                        type={'submit'}
                                        style={s.btnStyle}
                                        disabled={!!Object.keys(formProps.errors).length}
                                    />
                                </div>
                                <div className={s.errorMessage}>{error}</div>
                            </Form>
                        );
                    }}
                </Formik>
            </>
    )
};
