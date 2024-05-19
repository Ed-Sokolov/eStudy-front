import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { instance } from "../instanse";
import { type TTaskInfo } from "../../type/TaskInfo";

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