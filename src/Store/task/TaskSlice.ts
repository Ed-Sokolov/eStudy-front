import { createSlice } from "@reduxjs/toolkit";
import {createTask, getEditedTask, getInfo, getTask, removeAttachment, updateTask} from "../../API/tasks";
import { getRoomTasks } from "../../API/rooms";
import { type TTaskInfo } from "../../type/TaskInfo";
import { type TTaskItem } from "../../type/TaskItem";
import { type TTask } from "../../type/Task";
import { type TRoom } from "../../type/Room";
import {createComment, removeComment} from "../../API/comments";

const initState = {
    info: null as TTaskInfo | null,
    tasks: null as TTaskItem[] | null,
    task: null as TTask | null,
    room: null as TRoom | null,
    isLoading: false as boolean
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState: initState,
    reducers: {
        updateLocalTaskStatus(state, action) {
            const { taskID, newStatusID } = action.payload;

            if (state.tasks && taskID && newStatusID)
            {
                state.tasks = state.tasks.map((task: TTaskItem) => {
                    if (task.id === taskID)
                    {
                        task.status.id = newStatusID
                    }

                    return task
                })
            }
        },
        resetTask(state) {
            state.task = null
        },
        updateLocaleAttachments(state, action) {
            const id = action.payload

            if (id && state.task && state.task.attachments)
            {
                state.task.attachments = state.task.attachments.filter(attachment => attachment.id !== id)
            }
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getInfo.pending, state => {
                state.isLoading = true;
            })
            .addCase(getInfo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.info = action.payload;
            })
            .addCase(getInfo.rejected, (state, action) => {
                state.isLoading = false;

                throw action.payload;
            })
            .addCase(createTask.pending, state => {
                state.isLoading = true;
            })
            .addCase(createTask.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(createTask.rejected, (state, action) => {
                state.isLoading = false;

                throw action.payload;
            })
            .addCase(getRoomTasks.pending, state => {
                state.isLoading = true;
            })
            .addCase(getRoomTasks.fulfilled, (state, action) => {
                state.isLoading = false;
                state.tasks = action.payload.tasks;
                state.room = action.payload.room
            })
            .addCase(getRoomTasks.rejected, (state, action) => {
                state.isLoading = false;

                throw action.payload;
            })
            .addCase(getTask.pending, state => {
                state.isLoading = true;
            })
            .addCase(getTask.fulfilled, (state, action) => {
                state.isLoading = false;
                state.task = action.payload;
            })
            .addCase(getTask.rejected, (state, action) => {
                state.isLoading = false;

                throw action.payload;
            })
            .addCase(getEditedTask.pending, state => {
                state.isLoading = true;
            })
            .addCase(getEditedTask.fulfilled, (state, action) => {
                state.isLoading = false;
                state.task = action.payload;
            })
            .addCase(getEditedTask.rejected, (state, action) => {
                state.isLoading = false;

                throw action.payload;
            })
            .addCase(removeAttachment.pending, state => {
                state.isLoading = true;
            })
            .addCase(removeAttachment.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(removeAttachment.rejected, (state, action) => {
                state.isLoading = false;

                throw action.payload;
            })
            .addCase(updateTask.pending, state => {
                state.isLoading = true;
            })
            .addCase(updateTask.fulfilled, (state, action) => {
                state.isLoading = false;
                state.task = action.payload
            })
            .addCase(updateTask.rejected, (state, action) => {
                state.isLoading = false;

                throw action.payload;
            })
            .addCase(createComment.pending, state => {
                state.isLoading = true;
            })
            .addCase(createComment.fulfilled, (state, action) => {
                state.isLoading = false;

                if (state.task)
                {
                    state.task.comments.push(action.payload)
                }
            })
            .addCase(createComment.rejected, (state, action) => {
                state.isLoading = false;

                throw action.payload;
            })
            .addCase(removeComment.pending, state => {
                state.isLoading = true;
            })
            .addCase(removeComment.fulfilled, (state, action) => {
                state.isLoading = false;

                if (state.task)
                {
                    state.task.comments = state.task.comments.filter(comment => comment.id !== action.payload)
                }
            })
            .addCase(removeComment.rejected, (state, action) => {
                state.isLoading = false;

                throw action.payload;
            })
    }
})

export const { updateLocalTaskStatus, resetTask, updateLocaleAttachments } = taskSlice.actions;

export default taskSlice.reducer;