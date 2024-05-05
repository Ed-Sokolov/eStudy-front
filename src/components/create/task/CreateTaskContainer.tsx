import React from "react";
import {CreateTask} from "./CreateTask";
import { type TCreateTask } from "../../../type/create/Task";

export const CreateTaskContainer: React.FC = () => {
    const initValues: TCreateTask = {
        name: '',
        room_id: 1,
        user_id: 1
    }

    const submit = (values: TCreateTask) => {
        console.log(values);
    }

    return <CreateTask initValues={initValues} submit={submit} />
}