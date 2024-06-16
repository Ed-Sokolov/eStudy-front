import React from "react";
import "./../log.scss";
import { Field, Form, Formik } from "formik";
import LogImg from "./../../../assets/img/log-img-1.jpg";
import LogBackImg from "../../../assets/img/log-img-2.png";
import { InputPassword } from "../../inputs/password";
import { CustomSelect } from "../../inputs/select";
import { LogUpSchema } from "../../../validation/Register";
import { ErrorField } from "../../inputs/error";
import { type TLogForm } from "../../../type/log/LogForm";
import { type TLogUpForm } from "../../../type/log/LogUpForm";
import { type TSelectOption } from "../../../type/select/Option";

export const LogUp: React.FC<TLogForm<TLogUpForm> & {
    groups: TSelectOption[]
}> = (
    {
        initValues,
        submit,
        groups
    }
) => {
    return (
        <div className="container">
            <div className="log log-up">
                <div className="log__form-wrapper">
                    <div className="log__content">
                        <h2 className="log__title">Welcome to Our<br/><span>Edu</span>cation <span>Sys</span>tem</h2>

                        <Formik initialValues={initValues} onSubmit={submit} validationSchema={LogUpSchema}>
                            {
                                ({errors, touched, isValid}) => <Form className="log-form">
                                    <div className="form-group">
                                        <label htmlFor="name">Your Full Name</label>

                                        <div className="field-wrapper">
                                            <Field type={'text'} as={'input'} name={'name'} id={'name'}
                                                   placeholder={'Your Name'} className="input"/>

                                            {(errors.name && touched.name) && <ErrorField message={errors.name}/>}
                                        </div>

                                        <span className="hint">Format for name is Full name (Last name, First name, Patronymic) with the initials of the full name. For example, <span>Ivanov A.A.</span> or <span>Avramenko M.F.</span></span>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>

                                        <div className="field-wrapper">
                                            <Field type={'email'} as={'input'} name={'email'} id={'email'}
                                                   placeholder={'Your Email'} className="input"/>

                                            {(errors.email && touched.email) && <ErrorField message={errors.email}/>}
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="group_id">Select your group</label>

                                        <CustomSelect name="group_id" options={groups}/>

                                        <span className="hint">If you're <span>a student select your group</span></span>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>

                                        <div className="field-wrapper">
                                            <InputPassword name={'password'} id={'password'} placeholder={'Your Password'}/>

                                            {(errors.password && touched.password) && <ErrorField message={errors.password}/>}
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="confirm_password">Repeat Password</label>

                                        <div className="field-wrapper">
                                            <Field type={'password'} as={'input'} name={'password_confirmation'}
                                                   id={'confirm_password'} placeholder={'Repeat Your Password'}
                                                   className="input"/>

                                            {(errors.password_confirmation && touched.password_confirmation) && <ErrorField message={errors.password_confirmation}/>}
                                        </div>
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