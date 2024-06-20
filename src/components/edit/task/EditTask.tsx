import React from "react";
import { Field, Form, Formik } from "formik";
import "./../../create/create.scss";
import { CustomSelect } from "../../inputs/select";
import { ReactQuillWrapper } from "../../inputs/rich-textarea";
import { Dropzone } from "../../dropzone/Dropzone";
import { type TSelectOption } from "../../../type/select/Option";
import { type TForm } from "../../../type/Form";
import { type TEditTask } from "../../../type/edit/Task";
import { ReactComponent as RemoveIcon } from "../../../assets/img/trash.svg";

export const EditTask: React.FC<
    TForm<TEditTask> & {
        roomOptions: TSelectOption[]
        statusOptions: TSelectOption[]
        taskTypeOptions: TSelectOption[]
        removeOldFile: (value: number) => void
        removeTaskHandler: (id: number) => void
    }
> = (
    {
        initValues,
        submit,
        taskTypeOptions,
        roomOptions,
        statusOptions,
        removeOldFile,
        removeTaskHandler
    }
) => {
    const
        selectedRoom        = roomOptions.filter(roomOption => roomOption.value === initValues.room.id),
        selectedStatus      = statusOptions.filter(statusOption => statusOption.value === initValues.status.id),
        selectedTaskType    = taskTypeOptions.filter(taskTypeOption => taskTypeOption.value === initValues.type.id)

    return (
        <div className="container">
            <div className="creating-page">
                <h1 className="title">Edit this task</h1>

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

                                        <CustomSelect name="room_id" options={roomOptions}
                                                      defaultValues={selectedRoom}/>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="status_id">Status</label>

                                        <CustomSelect name="status_id" options={statusOptions}
                                                      defaultValues={selectedStatus}/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="type_id">Task Type</label>

                                        <CustomSelect name="type_id" options={taskTypeOptions}
                                                      defaultValues={selectedTaskType}/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="description">Description</label>

                                    <ReactQuillWrapper initValue={initValues.content} name="description"
                                                       id="description" placeholder="Description about this task"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="attachments">Attachments</label>

                                    <Dropzone removeOldFile={removeOldFile} oldFiles={initValues.attachments}
                                              name={"new_attachments"}/>
                                </div>

                                <div className="form-group">
                                    <button type={'submit'} className="button">Update</button>
                                </div>

                                <div className="form-group">
                                    <RemoveIcon className="remove__icon" onClick={() => removeTaskHandler(initValues.id)}/>
                                </div>
                            </Form>
                        }
                    </Formik>
                </div>
            </div>
        </div>
    )
}