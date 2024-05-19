import React from "react";
import {CreateTask} from "./CreateTask";
import { type TCreateTask } from "../../../type/create/Task";
import { type TSelectOption } from "../../../type/select/Option";

export const CreateTaskContainer: React.FC = () => {
    const initValues: TCreateTask = {
        name: '',
        user_id: 1,
        room: 0,
        type: '',
        status: '',
    }

    const submit = (values: TCreateTask) => {
        console.log(values);
    }

    const roomOptions: TSelectOption[] = [
        { value: 1, label: 'Web technology' },
        { value: 2, label: 'Back-End' },
        { value: 3, label: 'Front-End' },
    ]

    const statusOptions: TSelectOption[] = [
        { value: 'priority', label: 'Priority' },
        { value: 'in_progress', label: 'In Progress' },
        { value: 'check', label: 'Check' },
        { value: 'done', label: 'Done' },
    ]

    const taskTypeOptions: TSelectOption[] = [
        { value: 'lecture', label: 'Lecture' },
        { value: 'practice', label: 'Practice' },
        { value: 'information', label: 'Information' },
    ]

    return <CreateTask
        initValues={initValues}
        submit={submit}
        roomOptions={roomOptions}
        statusOptions={statusOptions}
        taskTypeOptions={taskTypeOptions}
    />
}