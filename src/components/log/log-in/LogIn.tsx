import React from "react";
import "./../log.scss";
import { Field, Form, Formik } from "formik";
import { InputPassword } from "../../inputs/password";
import { InputCheckbox } from "../../inputs/checkbox";
import { ErrorField } from "../../inputs/error";
import { LogInSchema } from "../../../validation/Auth";
import { type TLogForm } from "../../../type/log/LogForm";
import { type TLogInForm } from "../../../type/log/LogInForm";
import LogImg from "./../../../assets/img/log-img-1.jpg";
import LogBackImg from "./../../../assets/img/log-img-2.png";

export const LogIn: React.FC<TLogForm<TLogInForm>> = (
    {
        initValues,
        submit
    }
) => {
    return (
        <div className="container">
            <div className="log log-in">
                <div className="log__form-wrapper">
                    <div className="log__content">
                        <h2 className="log__title">Welcome Back to<br/> Our <span>Sys</span>tem</h2>

                        <Formik initialValues={initValues} onSubmit={submit} validationSchema={LogInSchema}>
                            {
                                ({errors, touched, isValid}) => <Form className="log-form">
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>

                                        <div className="field-wrapper">
                                            <Field type={'email'} as={'input'} name={'email'} id={'email'} placeholder={'Your Email'} className="input"/>

                                            {(errors.email && touched.email) && <ErrorField message={errors.email}/>}
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>

                                        <div className="field-wrapper">
                                            <InputPassword name={'password'} id={'password'} placeholder={'Your Password'} />

                                            {(errors.password && touched.password) && <ErrorField message={errors.password}/>}
                                        </div>
                                    </div>

                                    <div className="checkbox-group">
                                        <label htmlFor="checkbox">Remember Me</label>

                                        <InputCheckbox id={'checkbox'} name={'remember'}/>
                                    </div>

                                    <div className="form-group">
                                        <button type={'submit'} className="button">Log In</button>
                                    </div>
                                </Form>
                            }
                        </Formik>

                        <div className="divider"></div>
                    </div>

                    <img src={LogBackImg} alt="" className="log__form-img"/>
                </div>
                <div className="log__back">
                    <img src={LogImg} alt=""/>

                    <div className="author">
                        Made by <span>Eduard Sokolov</span>
                    </div>
                </div>
            </div>
        </div>
    )
}