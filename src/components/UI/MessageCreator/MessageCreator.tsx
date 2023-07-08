import {Field, FieldProps, Form, Formik} from 'formik'
import * as Yup from 'yup';
import {FC} from 'react';
import s from './MessageCreator.module.css';
import {SuperButton} from '../SuperButton/SuperButton';

const initialValue = {message: ''};
const validationSchema = Yup.object({message: Yup.string().required('Field can not be empty!')})

type MessageCreatorPropsType = {
    title: string;
    placeholder: string;
    addText: (value: string) => void;
};

export const MessageCreator: FC<MessageCreatorPropsType> = ({title, placeholder, addText}) => {
    return (
        <Formik
            initialValues={initialValue}
            validationSchema={validationSchema}
            onSubmit={(values, {resetForm}) => {
                addText(values.message)
                resetForm();
            }}
            validateOnBlur={false}
        >
            <Form className={s.postForm}>
                <Field name="message">
                    {(fieldProps: FieldProps) => {
                        const errorMessage = fieldProps.meta.error;
                        return <>
                       <textarea
                           {...fieldProps.field}
                           className={errorMessage ? s.postText + ' ' + s.error : s.postText}
                           placeholder={errorMessage ? errorMessage : placeholder}
                       />
                            <SuperButton title={title} type={'submit'} disabled={!!errorMessage} />
                        </>
                    }
                    }
                </Field>
            </Form>
        </Formik>
    )
}