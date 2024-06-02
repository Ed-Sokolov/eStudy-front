import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../instanse"
import axios from "axios";
import { TSelectOption } from "../../type/select/Option";

export const getGroups = createAsyncThunk<TSelectOption[], undefined, {rejectValue: any}>(
    'groups',
    async (_, {rejectWithValue}) => {
        try {
            const response = await instance.get('/api/groups');

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