import React, {useEffect, useRef, useState} from "react";
import "./task-item.scss";
import {type TTaskItem} from "../../type/TaskItem";
import {NavLink} from "react-router-dom";
import {useAppDispatch} from "../../hooks";
import {updateLocalTaskStatus} from "../../Store/task/TaskSlice";

export const TaskItem: React.FC<TTaskItem & {
    taskID: number | null
    setTaskID: (value: number | null) => void
    dragStartHandler: (e: React.DragEvent<HTMLDivElement>, taskID: number) => void
}> = (
    {
        id,
        author,
        type,
        name,
        date,
        room,
        status,
        setTaskID,
        taskID,
        dragStartHandler
    }
) => {
    const dispatch = useAppDispatch();

    const oldTaskID   = useRef<number | null>(null)

    const handleUpdateTask = (newTaskID: number, statusID: number) => {
        console.log(taskID);

        // dispatch(updateLocalTaskStatus({ taskID, statusID }));
    };

    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
        const target: HTMLElement = e.target as HTMLElement

        if (target.className === 'task-item') {
            target.style.boxShadow = '0 3px 5px black';
        }
    }

    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>): void => {
        const target: HTMLElement = e.target as HTMLElement

        target.style.boxShadow = 'none';
    }

    // const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, taskID: number): void => {
    //     // e.preventDefault()
    //
    //     setTaskID(taskID)
    //     oldTaskID.current = taskID
    //
    //     console.log('-------------');
    //     console.log('dragStartHandler');
    //     console.log('taskID', taskID);
    //     console.log('oldTaskID.current', oldTaskID.current);
    // }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>, statusID: number, currentTaskID: number | null) => {
        // e.preventDefault();

        if (currentTaskID)
        {
            console.log('-------------');
            console.log('dropHandler');
            console.log('currentTaskID', currentTaskID);
            console.log('statusID', statusID);
        }
    }

    return (
        <div className="task-item"
             onDragStart={e => dragStartHandler(e, id)}
             onDragOver={e => {
                 e.preventDefault()
             }}
             onDrop={e => dropHandler(e, status.id, taskID)}
             draggable={true}
             data-status-id={status.id}
        >
            <div className="task-item__info">
                <div className="task-item__info-author">{author.name}</div>
                <div className="task-item__info-date">{date}</div>
            </div>

            <h3 className="task-item__title">{name}</h3>

            <p className="task-item__category">{type.name}</p>

            <NavLink to={`/rooms/${room.id}/tasks/${id}`} className={'task-item__link'} />
        </div>
    )
}