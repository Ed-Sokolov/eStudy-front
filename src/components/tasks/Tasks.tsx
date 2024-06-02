import React from "react";
import "./tasks.scss";
import { TasksColumnContainer } from "../tasks-column/TasksColumnContainer";
import { type TTasksColumn } from "../../type/TasksColumn";
import { type TTaskItem } from "../../type/TaskItem";

export const Tasks: React.FC<
    {
        columns: TTasksColumn[]
        tasks: TTaskItem[],
        roomName: string
    }
> = (
    {
        columns,
        tasks,
        roomName
    }
) => {
    return (
        <div className="container">
            <div className="tasks">
                <h1 className="title">{ roomName }</h1>

                <ul className="tasks__columns">
                    {columns.map((column: TTasksColumn) => <li className="tasks__columns-item" key={column.id}>
                        <TasksColumnContainer {...column} tasks={tasks} />
                    </li>)}
                </ul>
            </div>
        </div>
    )
}