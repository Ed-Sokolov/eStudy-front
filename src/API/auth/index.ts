import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../instanse"
import axios from "axios";
import { type TUser } from "../../type/User";
import type {TLogUpForm} from "../../type/log/LogUpForm";

export const checkAuth = createAsyncThunk<TUser, undefined, {rejectValue: any}>(
    'auth/check',
    async (_, {rejectWithValue}) => {
        try {
            const response = await instance.get('/api/user');

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

export const login = createAsyncThunk<any, any, {rejectValue: any}>(
    'auth/login',
    async (data, {rejectWithValue}) => {
        try {
            await instance.get('/sanctum/csrf-cookie');

            const response = await instance.post('/login', data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response && error.response.data)
                {
                    return rejectWithValue(error.response.data)
                }
            }
        }
    }
)

export const logOut = createAsyncThunk<any, undefined, {rejectValue: any}>(
    'auth/logout',
    async (_, {rejectWithValue}) => {
        try {
            const response = await instance.post('/logout');
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response && error.response.data)
                {
                    return rejectWithValue(error.response.data)
                }
            }
        }
    }
)

export const register = createAsyncThunk<any, TLogUpForm, {rejectValue: any}>(
    'auth/register',
    async (data, {rejectWithValue}) => {
        try {
            await instance.get('/sanctum/csrf-cookie');

            const response = await instance.post('/register', data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response && error.response.data)
                {
                    return rejectWithValue(error.response.data)
                }
            }
        }
    }
)