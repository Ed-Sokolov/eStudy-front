import React, { useEffect, useState } from "react";
import { Task } from "./Task";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useParams } from "react-router-dom";
import { getTask } from "../../API/tasks";

export const TaskContainer: React.FC = () => {
    const [currentTab, setCurrentTab] = useState<'content' | 'attachments'>('content')

    const { task } = useAppSelector(state => state.task)
    const { user } = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch();

    const { roomID, taskID} = useParams()

    const isCorrectID = (id: string | undefined): boolean => {
        return !!(id && !isNaN(Number(id)))
    }

    useEffect(() => {
        if (isCorrectID(roomID) && isCorrectID(taskID))
        {
            dispatch(getTask({
                taskID: Number(taskID),
                roomID: Number(roomID)
            }))
        }
    }, []);

    return (
        <>
            {task
                ? <Task user={user} task={task} currentTab={currentTab} setCurrentTab={setCurrentTab}/>
                : <div>Loading...</div>
            }
        </>
    )
}