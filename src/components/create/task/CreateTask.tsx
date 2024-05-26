import React from "react";
import { type TForm } from "../../../type/Form";
import { type TCreateTask } from "../../../type/create/Task";
import { Field, Form, Formik } from "formik";
import "./../create.scss";
import { type TSelectOption } from "../../../type/select/Option";
import { CustomSelect } from "../../inputs/select";
import { ReactQuillWrapper } from "../../inputs/rich-textarea";
import { Dropzone } from "../../dropzone/Dropzone";

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
                                        <label htmlFor="room_id">Room</label>

                                        <CustomSelect name="room_id" options={roomOptions}/>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="status_id">Status</label>

                                        <CustomSelect name="status_id" options={statusOptions}/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="type_id">Task Type</label>

                                        <CustomSelect name="type_id" options={taskTypeOptions}/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="description">Description</label>

                                    <ReactQuillWrapper name="description" id="description" placeholder="Description about this task" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="attachments">Attachments</label>

                                    {/*<Field type={'file'} name="attachments" as="input" id="attachments"*/}
                                    {/*       className="input"></Field>*/}

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