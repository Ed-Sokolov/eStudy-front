import React, { useEffect, useState } from "react";
import { EditTask } from "./EditTask";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { getEditedTask, getInfo, removeAttachment, removeTask, updateTask } from "../../../API/tasks";
import { useNavigate, useParams } from "react-router-dom";
import { resetTask, updateLocaleAttachments } from "../../../Store/task/TaskSlice";
import { FormikHelpers } from "formik";
import { type TEditTask } from "../../../type/edit/Task";

export const EditTaskContainer: React.FC = () => {
    const
        {
            info,
            task
        } = useAppSelector(state => state.task),
        dispatch = useAppDispatch(),
        [ editedTask, setEditedTask ] = useState<TEditTask | null>(null),
        navigate = useNavigate()

    const { id } = useParams()

    useEffect(() => {
        dispatch(getInfo())

        if (id && !isNaN(Number(id)))
        {
            dispatch(getEditedTask(Number(id)))
                .then(() => {
                    if (task)
                    {
                        setEditedTask({
                            ...task,
                            type_id: task.type.id,
                            status_id: task.status.id,
                            author_id: task.author.id,
                            new_attachments: [],
                            room_id: task.room.id,
                            description: task.content
                        })
                    }
                })
        }

        return () => {
            // dispatch(resetTask())
        }
    }, [])

    const removeAttachmentHandler = (id: number) => {
        dispatch(removeAttachment(id))
            .then(() => {
                dispatch(updateLocaleAttachments(id))
            })
    }

    const submit = (values: TEditTask, actions: FormikHelpers<TEditTask>) => {
        dispatch(updateTask(values))
            .then(() => {
                navigate(`/rooms/${values.room_id}/tasks/${values.id}`)
            })
            .catch(error => {
                for (const errorKey in error.errors) {
                    actions.setFieldError(errorKey, error.errors[errorKey][0])
                }
            })
    }

    const removeTaskHandler = (id: number) => {
        dispatch(removeTask(id))
            .then(() => {
                navigate('/rooms/')
            })
    }

    return (
        <>
            {info && editedTask
                ? <EditTask
                        initValues={editedTask}
                        submit={submit}
                        roomOptions={info.rooms}
                        statusOptions={info.statuses}
                        taskTypeOptions={info.types}
                        removeOldFile={removeAttachmentHandler}
                        removeTaskHandler={removeTaskHandler}
                    />
                : 'Loading...'
            }
        </>
    )
}