import React from "react";
import { type TForm } from "../../../type/Form";
import { type TCreateTask } from "../../../type/create/Task";
import {Field, Form, Formik} from "formik";
import "./../create.scss";

export const CreateTask: React.FC<TForm<TCreateTask>> = (
    {
        initValues,
        submit
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
                                        <label htmlFor="people">Room</label>

                                        <Field type={'text'} as={'input'} name={'name'} id={'name'}
                                               placeholder={'Select Room'} className="input"/>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="status">Status</label>

                                        <Field name="status" as="select" id="status">
                                            <option disabled selected>Select Task Status</option>
                                            <option value="priority">Priority</option>
                                            <option value="in_progress">In Progress</option>
                                            <option value="check">Check</option>
                                            <option value="done">Done</option>
                                        </Field>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="type">Task Type</label>

                                        <Field name="type" as="select" id="type">
                                            <option disabled selected>Select Task Type</option>
                                            <option value="lecture">Lecture</option>
                                            <option value="practice">Practice</option>
                                            <option value="information">Information</option>
                                        </Field>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="description">Description</label>

                                    <Field name="description" as="textarea" id="description"
                                           className="textarea"></Field>
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