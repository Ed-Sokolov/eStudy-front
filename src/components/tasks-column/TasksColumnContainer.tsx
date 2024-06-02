import React, { useState } from "react";
import { TasksColumn } from "./TasksColumn";
import { useAppSelector } from "../../hooks";
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
    const { user } = useAppSelector(state => state.auth)

    const [taskID, setTaskID] = useState<number | null>(null)

    const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, taskID: number): void => {
        setTaskID(taskID)

        console.log('-------------');
        console.log('dragStartHandler');
        console.log('taskID', taskID);
    }

    return <TasksColumn user={user} taskID={taskID} setTaskID={setTaskID} dragStartHandler={dragStartHandler} id={id} title={title} tasks={tasks.filter((task: TTaskItem) => task.status.id === id)}/>
}