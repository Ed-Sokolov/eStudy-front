import { createSlice } from "@reduxjs/toolkit";
import { checkAuth, login, logOut, register } from "../../API/auth";
import { type TUser } from "../../type/User";

const initialState = {
    isAuth: false as boolean,
    user: null as TUser | null,
    profileId: null as number | null,
    isLoading: false as boolean
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetAuth(state) {
            state.isAuth = false;
            state.profileId = null;
        }
    },
    extraReducers: (builder): void => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.isAuth = true;
            })
            .addCase(login.rejected, (state, action) => {
                state.isAuth = false;
                state.isLoading = false;

                throw action.payload;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isAuth = true;
            })
            .addCase(register.rejected, (state, action) => {
                state.isAuth = false;
                state.isLoading = false;

                throw action.payload;
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                state.isAuth = true;
                state.profileId = action.payload.id;
                state.user = action.payload
            })
            .addCase(checkAuth.rejected, (state) => {
                state.isAuth = false;
                state.profileId = null;
            })
            .addCase(logOut.fulfilled, (state) => {
                state.isAuth = false;
                state.profileId = null;
            })
    }
})

export const {resetAuth} = authSlice.actions;

export default authSlice.reducer;