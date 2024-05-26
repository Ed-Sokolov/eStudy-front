import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, {AxiosResponse} from "axios";
import { instance } from "../instanse";
import { type TTaskInfo } from "../../type/TaskInfo";
import {TCreateTask} from "../../type/create/Task";
import type {TTask} from "../../type/Task";

export const getInfo = createAsyncThunk<TTaskInfo, undefined, { rejectValue: any }>(
    'tasks',
    async (_, {rejectWithValue}) => {
        try {
            const response = await instance.get('/api/tasks/info');

            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error);
            }
        }
    }
)

export const createTask = createAsyncThunk<number, TCreateTask, { rejectValue: any }>(
    'tasks/create',
    async (data, {rejectWithValue}) => {
        try {
            const formData = new FormData();

            formData.append('name', data.name);
            formData.append('author_id', data.author_id.toString());
            formData.append('room_id', data.room_id.toString());
            formData.append('status_id', data.status_id.toString());
            formData.append('type_id', data.type_id.toString());

            if (data.description.trim().length > 0)
            {
                formData.append('description', data.description);
            }

            const response = await instance.post('/api/tasks', formData);

            console.log(response.data.data)

            return response.data.data.id;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data);
            }
        }
    }
)

type TAxiosTask = {
    roomID: number
    taskID: number
}

export const getTask = createAsyncThunk<TTask, TAxiosTask, { rejectValue: any }>(
    'tasks/show',
    async (data, {rejectWithValue}) => {
        try {
            const { roomID, taskID} = data

            const response: AxiosResponse<any, any> = await instance.get(`/api/rooms/${roomID}/tasks/${taskID}`);

            return response.data.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error);
            }
        }
    }
)