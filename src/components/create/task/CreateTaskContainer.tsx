import React, { useEffect } from "react";
import { CreateTask } from "./CreateTask";
import { type TCreateTask } from "../../../type/create/Task";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { getInfo } from "../../../API/tasks";

export const CreateTaskContainer: React.FC = () => {
    const {info} = useAppSelector(state => state.task);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getInfo())
    }, [])

    const initValues: TCreateTask = {
        name: '',
        user_id: 1,
        room: 0,
        type: 0,
        status: 0,
    }

    const submit = (values: TCreateTask) => {
        console.log(values);
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