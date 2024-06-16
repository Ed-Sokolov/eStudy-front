import React from "react";
import "./../comment.scss";
import { Field, Form, Formik } from "formik";
import { ErrorField } from "../../inputs/error";
import { CommentSchema } from "../../../validation/Comment";
import { type TForm } from "../../../type/Form";
import { type TCreateComment } from "../../../type/create/Comment";

export const CreateComment: React.FC<TForm<TCreateComment>> = (
    {
        initValues,
        submit
    }
) => {
    return (
        <div className="comment-form">
            <div className="form-wrapper">
                <Formik initialValues={initValues} onSubmit={submit} validationSchema={CommentSchema}>
                    {
                        ({errors, touched, isValid}) => <Form className={'form'}>
                            <div className="form-group">
                                <div className="field-wrapper field-textarea-wrapper">
                                    <Field as={'textarea'} name={'content'} id={'content'} placeholder={'Leave Comment'}
                                           className="textarea"/>

                                    {(errors.content && touched.content) && <ErrorField message={errors.content}/>}
                                </div>
                            </div>

                            <div className="form-group">
                                <button type={'submit'} className="button">Add</button>
                            </div>
                        </Form>
                    }
                </Formik>
            </div>
        </div>
    )
}