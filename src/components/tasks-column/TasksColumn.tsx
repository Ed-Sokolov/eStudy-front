import React from "react";
import "./tasks-column.scss";
import { TaskItem } from "../task-item/TaskItem";
import { type TTasksColumn } from "../../type/TasksColumn";
import { type TTaskItem } from "../../type/TaskItem";
import { type TUser } from "../../type/User";

export const TasksColumn: React.FC<TTasksColumn & {
    tasks: TTaskItem[]
    taskID: number | null
    setTaskID: (value: number | null) => void
    dragStartHandler: (e: React.DragEvent<HTMLDivElement>, taskID: number) => void
    user: TUser | null
}> = (
    {
        id,
        title,
        tasks,
        taskID,
        setTaskID,
        dragStartHandler
    }
) => {

    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
        const target: HTMLElement = e.target as HTMLElement

        if (target.className === 'task-item') {
            target.style.boxShadow = '0 3px 5px black';
        }
    }

    const dropTaskHandler = (e: React.DragEvent<HTMLDivElement>, columnID: number) => {
        // console.log('dropTaskHandler', '-------------')
        // console.log('columnID', columnID)
    }

    return (
        <div data-column-id={id} className="tasks__column"
             onDragOver={e => dragOverHandler(e)}
             onDrop={e => dropTaskHandler(e, taskID ?? 0)}
        >
            <h2 className="tasks__column-title">{ title }</h2>

            <ul className="tasks__list">
                {tasks.map((task: TTaskItem) => <li className="tasks__list-item" key={task.id}>
                    <TaskItem dragStartHandler={dragStartHandler} taskID={taskID} setTaskID={setTaskID} {...task} />
                </li>) }
            </ul>
        </div>
    )
}