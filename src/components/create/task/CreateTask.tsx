import React from "react";
import { type TForm } from "../../../type/Form";
import { type TCreateTask } from "../../../type/create/Task";
import { Field, Form, Formik } from "formik";
import "./../create.scss";
import { type TSelectOption } from "../../../type/select/Option";
import { CustomSelect } from "../../inputs/select";
import { ReactQuillWrapper } from "../../inputs/rich-textarea";
import { Dropzone } from "../../dropzone/Dropzone";
import { TaskSchema } from "../../../validation/Task";
import { ErrorField } from "../../inputs/error";

export const CreateTask: React.FC<
    TForm<TCreateTask> & {
        roomOptions: TSelectOption[]
        statusOptions: TSelectOption[]
        taskTypeOptions: TSelectOption[]
    }
> = (
    {
        initValues,
        submit,
        taskTypeOptions,
        roomOptions,
        statusOptions
    }
) => {
    return (
        <div className="container">
            <div className="creating-page">
                <h1 className="title">Create a new task</h1>

                <div className="form-wrapper">
                    <Formik initialValues={initValues} onSubmit={submit} validationSchema={TaskSchema}>
                        {
                            ({errors, touched, isValid}) => <Form className={'form'}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>

                                        <div className="field-wrapper">
                                            <Field type={'text'} as={'input'} name={'name'} id={'name'}
                                                   placeholder={'Task Name'} className="input"/>

                                            {(errors.name && touched.name) && <ErrorField message={errors.name}/>}
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="room_id">Course</label>

                                        <div className="field-wrapper">
                                            <CustomSelect name="room_id" options={roomOptions}/>

                                            {(errors.room_id && touched.room_id) && <ErrorField message={errors.room_id}/>}
                                        </div>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="status_id">Status</label>

                                        <div className="field-wrapper">
                                            <CustomSelect name="status_id" options={statusOptions}/>

                                            {(errors.status_id && touched.status_id) && <ErrorField message={errors.status_id}/>}
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="type_id">Task Type</label>

                                        <div className="field-wrapper">
                                            <CustomSelect name="type_id" options={taskTypeOptions}/>

                                            {(errors.type_id && touched.type_id) && <ErrorField message={errors.type_id}/>}
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="description">Description</label>

                                    <ReactQuillWrapper name="description" id="description" placeholder="Description about this task" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="attachments">Attachments</label>

                                    <Dropzone name={"attachments"} />
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