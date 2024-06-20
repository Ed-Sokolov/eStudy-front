import React, { useEffect } from "react";
import { CreateTask } from "./CreateTask";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { createTask, getInfo } from "../../../API/tasks";
import { useNavigate } from "react-router-dom";
import { type TCreateTask } from "../../../type/create/Task";

export const CreateTaskContainer: React.FC = () => {
    const {info} = useAppSelector(state => state.task);
    const
        dispatch = useAppDispatch(),
        navigate = useNavigate()

    useEffect(() => {
        dispatch(getInfo())
    }, [])

    const initValues: TCreateTask = {
        name: '',
        description: '',
        room_id: 0,
        author_id: 1,
        type_id: 0,
        status_id: 0,
        attachments: []
    }

    const submit = (values: TCreateTask) => {
        dispatch(createTask(values))
            .then(res => {
                if (res.payload)
                {
                    navigate(`/rooms/${values.room_id}/tasks/${res.payload}`)
                }
            })
    }

    return (
        <>
            {info
                ? <CreateTask
                        initValues={initValues}
                        submit={submit}
                        roomOptions={info.rooms}
                        statusOptions={info.statuses}
                        taskTypeOptions={info.types}
                    />
                : 'Loading...'
            }
        </>
    )
}