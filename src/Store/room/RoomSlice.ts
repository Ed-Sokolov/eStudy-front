import {createSlice} from "@reduxjs/toolkit";
import { type TRoom } from "../../type/Room";
import {getRooms} from "../../API/rooms";

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
    }
})

export default roomSlice.reducer;