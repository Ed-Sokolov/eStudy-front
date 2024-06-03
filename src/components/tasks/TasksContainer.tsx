import React, { useEffect } from "react";
import { Tasks } from "./Tasks";
import { TTasksColumn } from "../../type/TasksColumn";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useParams } from "react-router-dom";
import { getRoomTasks } from "../../API/rooms";

export const TasksContainer: React.FC = () => {
    const columns: TTasksColumn[] = [
        {
            id: 1,
            title: 'Priority',
        },
        {
            id: 2,
            title: 'In Progress',
        },
        {
            id: 3,
            title: 'Check',
        },
        {
            id: 4,
            title: 'Done',
        },
    ]

    const { tasks, room } = useAppSelector(state => state.task);
    const { user } = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch();

    const {id: roomId} = useParams();

    useEffect(() => {
        if (roomId && !isNaN(Number(roomId))) {
            dispatch(getRoomTasks(Number(roomId)));
        }
    }, [roomId])

    return (
        <>
            {
                tasks && room
                    ? <Tasks user={user} columns={columns} tasks={tasks} room={room} />
                    : <div>Loading...</div>
            }
        </>
    )
}