import React from "react";
import {TasksColumn} from "./TasksColumn";
import {type TTasksColumn} from "../../type/TasksColumn";
import {type TTaskItem} from "../../type/TaskItem";

export const TasksColumnContainer: React.FC<TTasksColumn> = (
    {
        id,
        title
    }
) => {
    const tasks: TTaskItem[] = [
        {
            id: 1,
            title: 'Task 1',
            author: 'Sokolov E.O.',
            category: 'Lecture',
            date: '31.03.2024'
        },
        {
            id: 2,
            title: 'Task 2',
            author: 'Sokolov E.O.',
            category: 'Lecture',
            date: '31.03.2024'
        },
        {
            id: 3,
            title: 'Task 3',
            author: 'Sokolov E.O.',
            category: 'Lecture',
            date: '31.03.2024'
        },
    ]

    return <TasksColumn id={id} title={title} tasks={tasks}/>
}