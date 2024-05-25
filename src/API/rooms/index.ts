import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { type TRoom } from "../../type/Room";
import { instance } from "../instanse";
import {TTaskItem} from "../../type/TaskItem";

export const getRooms = createAsyncThunk<TRoom[], undefined, { rejectValue: any }>(
    'rooms',
    async (_, {rejectWithValue}) => {
        try {
            const response = await instance.get('/api/rooms/');

            return response.data.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error);
            }
        }
    }
)

export const getRoomTasks = createAsyncThunk<TTaskItem[], number, { rejectValue: any }>(
    'rooms/show',
    async (id, {rejectWithValue}) => {
        try {
            const response = await instance.get(`/api/rooms/${id}`);

            return response.data.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error);
            }
        }
    }
)