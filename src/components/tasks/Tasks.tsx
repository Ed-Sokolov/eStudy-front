import React from "react";
import "./tasks.scss";
import {TasksColumnContainer} from "../tasks-column/TasksColumnContainer";
import {TTasksColumn} from "../../type/TasksColumn";

export const Tasks: React.FC<
    {columns: TTasksColumn[]}
> = (
    {
        columns
    }
) => {
    return (
        <div className="container">
            <div className="tasks">
                <h1 className="title">WEB-Technology</h1>

                <ul className="tasks__columns">
                    {columns.map((column: TTasksColumn) => <li className="tasks__columns-item" key={column.id}>
                        <TasksColumnContainer {...column} />
                    </li>)}
                </ul>
            </div>
        </div>
    )
}