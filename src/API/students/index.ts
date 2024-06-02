import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { instance } from "../instanse";
import { type TSelectOption } from "../../type/select/Option";

export const getStudents = createAsyncThunk<TSelectOption[], undefined, { rejectValue: any }>(
    'students',
    async (_, {rejectWithValue}) => {
        try {
            const response = await instance.get('/api/students/');

            return response.data.data;
        } catch (error) {
            if(axios.isAxiosError(error)) {
                if (error.response && error.response.data)
                {
                    return rejectWithValue(error.response.data)
                }
            }
        }
    }
)