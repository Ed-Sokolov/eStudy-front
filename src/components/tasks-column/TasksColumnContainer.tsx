import React, { useEffect } from "react";
import { TasksColumn } from "./TasksColumn";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getRoomTasks } from "../../API/rooms";
import { useParams } from "react-router-dom";
import { type TTasksColumn } from "../../type/TasksColumn";
import { type TTaskItem } from "../../type/TaskItem";

export const TasksColumnContainer: React.FC<
    TTasksColumn & {
        tasks: TTaskItem[]
    }
> = (
    {
        id,
        title,
        tasks
    }
) => {
    return <TasksColumn id={id} title={title} tasks={tasks.filter((task: TTaskItem) => task.status.id === id)}/>
}