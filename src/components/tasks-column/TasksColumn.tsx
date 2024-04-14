import React from "react";
import "./tasks-column.scss";
import {type TTasksColumn} from "../../type/TasksColumn";
import {type TTaskItem} from "../../type/TaskItem";
import {TaskItem} from "../task-item/TaskItem";

export const TasksColumn: React.FC<
    TTasksColumn & { tasks: TTaskItem[] }
> = (
    {
        id,
        title,
        tasks
    }
) => {
    return (
        <div data-column-id={id} className="tasks__column">
            <h2 className="tasks__column-title">{title}</h2>

            <ul className="tasks__list">
                {tasks.map((task: TTaskItem) => <li className="tasks__list-item" key={task.id}>
                    <TaskItem {...task} />
                </li>) }
            </ul>
        </div>
    )
}