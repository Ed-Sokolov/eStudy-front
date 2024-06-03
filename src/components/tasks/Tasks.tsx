import React from "react";
import "./tasks.scss";
import { TasksColumnContainer } from "../tasks-column/TasksColumnContainer";
import { NavLink } from "react-router-dom";
import { type TTasksColumn } from "../../type/TasksColumn";
import { type TTaskItem } from "../../type/TaskItem";
import { type TUser } from "../../type/User";
import { type TRoom } from "../../type/Room";

export const Tasks: React.FC<
    {
        columns: TTasksColumn[]
        tasks: TTaskItem[]
        room: TRoom
        user: TUser | null
    }
> = (
    {
        columns,
        tasks,
        room,
        user
    }
) => {
    const isEditable = (user && user.role === 'administrator') || (user && user.id === room.author.id)

    return (
        <div className="container">
            <div className="tasks">
                <h1 className="title">
                    { room.name }

                    {
                        isEditable && <NavLink to={`/edit/rooms/${room.id}`} className={'room__link-edit'}>Edit</NavLink>
                    }
                </h1>

                <ul className="tasks__columns">
                    {columns.map((column: TTasksColumn) => <li className="tasks__columns-item" key={column.id}>
                        <TasksColumnContainer {...column} tasks={tasks} />
                    </li>)}
                </ul>
            </div>
        </div>
    )
}