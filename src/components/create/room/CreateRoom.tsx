import React from "react";
import { type TForm } from "../../../type/Form";
import { type TCreateRoom } from "../../../type/create/Room";
import { Field, Form, Formik } from "formik";
import "./../create.scss";
import Select from 'react-select'
import { type TSelectOption } from "../../../type/select/Option";
import { CustomSelect } from "../../inputs/select";

export const CreateRoom: React.FC<
    TForm<TCreateRoom> & {peopleOptions: TSelectOption[]}
> = (
    {
        initValues,
        submit,
        peopleOptions
    }
) => {
    return (
        <div className="container">
            <div className="creating-page">
                <h1 className="title">Create a new room</h1>

                <div className="form-wrapper">
                    <Formik initialValues={initValues} onSubmit={submit}>
                        {
                            ({errors, touched, isValid}) => <Form className={'form'}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>

                                        <Field type={'text'} as={'input'} name={'name'} id={'name'}
                                               placeholder={'Room Name'} className="input"/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="students">People</label>

                                        <CustomSelect name="students" options={peopleOptions} isMulti={true} closeMenuOnSelect={false}/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <button type={'submit'} className="button">Create</button>
                                </div>
                            </Form>
                        }
                    </Formik>
                </div>
            </div>
        </div>
    )
}