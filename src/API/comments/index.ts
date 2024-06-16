import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { instance } from "../instanse";
import { type TComment } from "../../type/Comment";
import { type TCreateComment } from "../../type/create/Comment";

export const createComment = createAsyncThunk<TComment, TCreateComment, { rejectValue: any }>(
    'comments/create',
    async (data, {rejectWithValue}) => {
        try {
            const response: AxiosResponse<any, any> = await instance.post('/api/comments/', data);

            return response.data.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error);
            }
        }
    }
)

export const removeComment = createAsyncThunk<any, number, { rejectValue: any }>(
    'comments/remove',
    async (comment_id, {rejectWithValue}) => {
        try {
            const response: AxiosResponse<any, any> = await instance.delete(`/api/comments/${comment_id}`);

            return comment_id;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error);
            }
        }
    }
)