import { createSlice } from "@reduxjs/toolkit";
import { createTask, getInfo, getTask } from "../../API/tasks";
import { getRoomTasks } from "../../API/rooms";
import { type TTaskInfo } from "../../type/TaskInfo";
import { type TTaskItem } from "../../type/TaskItem";
import { type TTask } from "../../type/Task";

const initState = {
    info: null as TTaskInfo | null,
    tasks: null as TTaskItem[] | null,
    task: null as TTask | null,
    isLoading: false as boolean
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState: initState,
    reducers: {},
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
                state.tasks = action.payload;
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
    }
})

export default taskSlice.reducer;