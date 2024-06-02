import { createSlice } from "@reduxjs/toolkit";
import { createRoom, getRooms } from "../../API/rooms";
import { type TRoom } from "../../type/Room";

const initState = {
    rooms: null as TRoom[] | null,
    isLoading: false as boolean
}

const roomSlice = createSlice({
    name: 'rooms',
    initialState: initState,
    reducers: {},
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
    }
})

export default roomSlice.reducer;