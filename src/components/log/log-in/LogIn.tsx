import React from "react";
import "./../log.scss";
import { type TLogForm } from "../../../type/log/LogForm";
import { type TLogInForm } from "../../../type/log/LogInForm";
import {Field, Form, Formik} from "formik";

export const LogIn: React.FC<TLogForm<TLogInForm>> = (
    {
        initValues,
        submit
    }
) => {
    return (
        <div className="container">
            <div className="log">
                <h2>Welcome <span>Back</span></h2>

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

                            <div className="checkbox-group">
                                <label htmlFor="checkbox">Remember Me</label>
                                <Field type={'checkbox'} name={'checkbox'} id={'checkbox'}/>
                            </div>

                            <div className="form-group">
                                <button type={'submit'}>Log In</button>
                            </div>
                        </Form>
                    }
                </Formik>
            </div>
        </div>
    )
}