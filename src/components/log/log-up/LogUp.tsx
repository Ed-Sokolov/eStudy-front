import React from "react";
import "./../log.scss";
import {Field, Form, Formik} from "formik";
import { type TLogForm } from "../../../type/log/LogForm";
import { type TLogUpForm } from "../../../type/log/LogUpForm";
import LogImg from "./../../../assets/img/log-img-1.jpg";
import LogBackImg from "../../../assets/img/log-img-2.png";
import {InputPassword} from "../../inputs/password";

export const LogUp: React.FC<TLogForm<TLogUpForm>> = (
    {
        initValues,
        submit
    }
) => {
    return (
        <div className="container">
            <div className="log log-up">
                <div className="log__form-wrapper">
                    <div className="log__content">
                        <h2 className="log__title">Welcome to Our<br/><span>Edu</span>cation <span>Sys</span>tem</h2>

                        <Formik initialValues={initValues} onSubmit={submit}>
                            {
                                ({errors, touched, isValid}) => <Form className="log-form">
                                    <div className="form-group">
                                        <label htmlFor="name">Your Name</label>

                                        <Field type={'text'} as={'input'} name={'name'} id={'name'}
                                               placeholder={'Your Name'} className="input"/>

                                        <span className="hint">Format for name is Full name (Last name, First name, Patronymic) with the initials of the full name. For example, <span>Ivanov A.A.</span> or <span>Avramenko M.F.</span></span>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <Field type={'email'} as={'input'} name={'email'} id={'email'}
                                               placeholder={'Your Email'} className="input"/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>

                                        <InputPassword name={'password'} id={'password'} placeholder={'Your Password'}/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="confirm_password">Repeat Password</label>
                                        <Field type={'password'} as={'input'} name={'confirm_password'}
                                               id={'confirm_password'} placeholder={'Repeat Your Password'}
                                               className="input"/>
                                    </div>

                                    <div className="form-group">
                                        <button type={'submit'} className="button">Log Up</button>
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