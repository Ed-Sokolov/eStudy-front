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
    const tasks: TTaskItem[] = []

    return <TasksColumn id={id} title={title} tasks={tasks}/>
}