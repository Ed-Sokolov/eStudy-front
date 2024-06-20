import { createSlice } from "@reduxjs/toolkit";
import { createRoom, getRoom, getRooms, removeRoom, updateRoom } from "../../API/rooms";
import { type TRoom } from "../../type/Room";
import { type TEditRoom } from "../../type/edit/Room";

const initState = {
    rooms: null as TRoom[] | null,
    room: null as TEditRoom | null,
    isLoading: false as boolean
}

const roomSlice = createSlice({
    name: 'rooms',
    initialState: initState,
    reducers: {
        resetRoom(state) {
            state.room = null
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getRooms.pending, state => {
                state.isLoading = true;
            })
            .addCase(getRooms.fulfilled, (state, action) => {
                state.isLoading = false;
                state.rooms = action.payload;
            })
            .addCase(getRooms.rejected, (state, action) => {
                state.isLoading = false;

                throw action.payload;
            })
            .addCase(createRoom.pending, state => {
                state.isLoading = true;
            })
            .addCase(createRoom.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(createRoom.rejected, (state, action) => {
                state.isLoading = false;

                throw action.payload;
            })
            .addCase(getRoom.pending, state => {
                state.isLoading = true;
            })
            .addCase(getRoom.fulfilled, (state, action) => {
                state.isLoading = false;
                state.room = action.payload;
            })
            .addCase(getRoom.rejected, (state, action) => {
                state.isLoading = false;

                throw action.payload;
            })
            .addCase(updateRoom.pending, state => {
                state.isLoading = true;
            })
            .addCase(updateRoom.fulfilled, (state, action) => {
                state.isLoading = false;
                state.room = null;
            })
            .addCase(updateRoom.rejected, (state, action) => {
                state.isLoading = false;

                throw action.payload;
            })
            .addCase(removeRoom.pending, state => {
                state.isLoading = true;
            })
            .addCase(removeRoom.fulfilled, (state, action) => {
                state.isLoading = false;

                state.room = null
            })
            .addCase(removeRoom.rejected, (state, action) => {
                state.isLoading = false;

                throw action.payload;
            })
    }
})

export const { resetRoom } = roomSlice.actions;

export default roomSlice.reducer;