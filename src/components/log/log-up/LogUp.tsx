import React from "react";
import "./../log.scss";
import {Field, Form, Formik} from "formik";
import { type TLogForm } from "../../../type/log/LogForm";
import { type TLogUpForm } from "../../../type/log/LogUpForm";

export const LogUp: React.FC<TLogForm<TLogUpForm>> = (
    {
        initValues,
        submit
    }
) => {
    return (
        <div className="container">
            <div className="log">
                <h2>Welcome to <span>Our Edu</span>cation <span>Sys</span>tem</h2>

                <Formik initialValues={initValues} onSubmit={submit}>
                    {
                        ({errors, touched, isValid}) => <Form>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Field type={'email'} as={'input'} name={'email'} id={'email'} placeholder={'Your Email'}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Field type={'password'} as={'input'} name={'password'} id={'password'} placeholder={'Your Password'}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="confirm_password">Repeat Password</label>
                                <Field type={'password'} as={'input'} name={'confirm_password'} id={'confirm_password'} placeholder={'Repeat Your Password'}/>
                            </div>

                            <div className="form-group">
                                <button type={'submit'}>Log Up</button>
                            </div>
                        </Form>
                    }
                </Formik>
            </div>
        </div>
    )
}