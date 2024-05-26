import React, { useEffect } from "react";
import { CreateTask } from "./CreateTask";
import { type TCreateTask } from "../../../type/create/Task";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { createTask, getInfo } from "../../../API/tasks";

export const CreateTaskContainer: React.FC = () => {
    const {info} = useAppSelector(state => state.task);
    const dispatch = useAppDispatch();

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
        console.log(values);
        // dispatch(createTask(values))
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