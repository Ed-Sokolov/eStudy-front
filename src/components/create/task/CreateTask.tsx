import React from "react";
import { type TForm } from "../../../type/Form";
import { type TCreateTask } from "../../../type/create/Task";
import { Field, Form, Formik } from "formik";
import "./../create.scss";
import Select from 'react-select'
import { type TSelectOption } from "../../../type/select/Option";
import {CustomSelect} from "../../inputs/select";
import {ReactQuillWrapper} from "../../inputs/rich-textarea";

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
                    <Formik initialValues={initValues} onSubmit={submit}>
                        {
                            ({errors, touched, isValid}) => <Form className={'form'}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>

                                        <Field type={'text'} as={'input'} name={'name'} id={'name'}
                                               placeholder={'Task Name'} className="input"/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="room">Room</label>

                                        <CustomSelect name="room" options={roomOptions}/>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="status">Status</label>

                                        <CustomSelect name="status" options={statusOptions}/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="type">Task Type</label>

                                        <CustomSelect name="type" options={taskTypeOptions}/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="description">Description</label>

                                    <ReactQuillWrapper name="description" id="description" placeholder="Description about this task" />

                                    {/*<Field name="description" as="textarea" id="description"*/}
                                    {/*       className="textarea"></Field>*/}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="attachments">Attachments</label>

                                    <Field type={'file'} name="attachments" as="input" id="attachments"
                                           className="input"></Field>
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