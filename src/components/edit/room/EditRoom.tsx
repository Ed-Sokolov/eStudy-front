import React from "react";
import { Field, Form, Formik } from "formik";
import "./../../create/create.scss";
import { CustomSelect } from "../../inputs/select";
import { type TSelectOption } from "../../../type/select/Option";
import { type TForm } from "../../../type/Form";
import { type TEditRoom } from "../../../type/edit/Room";

export const EditRoom: React.FC<TForm<TEditRoom> & {
    peopleOptions: TSelectOption[]
}> = (
    {
        initValues,
        submit,
        peopleOptions,
    }
) => {
    return (
        <div className="container">
            <div className="creating-page">
                <h1 className="title">Edit this room</h1>

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

                                        <CustomSelect name="students" options={peopleOptions} defaultValues={initValues.students} isMulti={true} closeMenuOnSelect={false}/>
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