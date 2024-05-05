import React from "react";
import "./../log.scss";
import { type TLogForm } from "../../../type/log/LogForm";
import { type TLogInForm } from "../../../type/log/LogInForm";
import {Field, Form, Formik} from "formik";
import LogImg from "./../../../assets/img/log-img-1.jpg";
import LogBackImg from "./../../../assets/img/log-img-2.png";
import {InputPassword} from "../../inputs/password";
import {InputCheckbox} from "../../inputs/checkbox";

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

                        <Formik initialValues={initValues} onSubmit={submit}>
                            {
                                ({errors, touched, isValid}) => <Form className="log-form">
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <Field type={'email'} as={'input'} name={'email'} id={'email'} placeholder={'Your Email'} className="input"/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>

                                        <InputPassword name={'password'} id={'password'} placeholder={'Your Password'} />
                                    </div>

                                    <div className="checkbox-group">
                                        <InputCheckbox id={'checkbox'} name={'remember'} />

                                        <label htmlFor="checkbox">Remember Me</label>
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