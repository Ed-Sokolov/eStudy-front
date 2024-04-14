import React from "react";
import {Tasks} from "./Tasks";
import {TTasksColumn} from "../../type/TasksColumn";

export const TasksContainer: React.FC = () => {
    const columns: TTasksColumn[] = [
        {
            id: 1,
            title: 'Priority',
        },
        {
            id: 2,
            title: 'In Progress',
        },
        {
            id: 3,
            title: 'Check',
        },
        {
            id: 4,
            title: 'Done',
        },
    ]

    return <Tasks columns={columns} />
}