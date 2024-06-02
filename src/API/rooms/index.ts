import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, {AxiosResponse} from "axios";
import { type TRoom } from "../../type/Room";
import { instance } from "../instanse";
import { type TTaskItem } from "../../type/TaskItem";
import {TCreateRoom} from "../../type/create/Room";
import {TRoomTask} from "../../type/RoomTask";
import {TEditRoom} from "../../type/edit/Room";

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

export const getRoomTasks = createAsyncThunk<TRoomTask, number, { rejectValue: any }>(
    'rooms/show',
    async (id, {rejectWithValue}) => {
        try {
            const response: AxiosResponse<any, any> = await instance.get(`/api/rooms/${id}`);

            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error);
            }
        }
    }
)

export const createRoom = createAsyncThunk<TRoom, TCreateRoom, { rejectValue: any }>(
    'rooms/create',
    async (data, {rejectWithValue}) => {
        try {
            const response: AxiosResponse<any, any> = await instance.post('/api/rooms/', data);

            return response.data.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error);
            }
        }
    }
)

export const getRoom = createAsyncThunk<TEditRoom, number, { rejectValue: any }>(
    'rooms/room',
    async (id, {rejectWithValue}) => {
        try {
            const response: AxiosResponse<any, any> = await instance.get(`/api/rooms/${id}/edit`);

            return response.data.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error);
            }
        }
    }
)

export const updateRoom = createAsyncThunk<TRoom, TEditRoom, { rejectValue: any }>(
    'rooms/edit',
    async (data, {rejectWithValue}) => {
        try {
            const response: AxiosResponse<any, any> = await instance.put(`/api/rooms/${data.id}`, data);

            return response.data.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error);
            }
        }
    }
)