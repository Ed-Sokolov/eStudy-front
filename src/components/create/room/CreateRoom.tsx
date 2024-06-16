import React from "react";
import { Field, Form, Formik } from "formik";
import "./../create.scss";
import { CustomSelect } from "../../inputs/select";
import { RoomSchema } from "../../../validation/Room";
import { ErrorField } from "../../inputs/error";
import { type TCreateRoom } from "../../../type/create/Room";
import { type TForm } from "../../../type/Form";
import { type TSelectOption } from "../../../type/select/Option";

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
                <h1 className="title">Create a new Course</h1>

                <div className="form-wrapper">
                    <Formik initialValues={initValues} onSubmit={submit} validationSchema={RoomSchema}>
                        {
                            ({errors, touched, isValid}) => <Form className={'form'}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>

                                        <div className="field-wrapper">
                                            <Field type={'text'} as={'input'} name={'name'} id={'name'}
                                               placeholder={'Room Name'} className="input"/>

                                            {(errors.name && touched.name) && <ErrorField message={errors.name}/>}
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="students">Students</label>

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