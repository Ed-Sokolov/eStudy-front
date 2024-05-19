import { createSlice } from "@reduxjs/toolkit";
import { getInfo } from "../../API/tasks";
import { type TTaskInfo } from "../../type/TaskInfo";

const initState = {
    info: null as TTaskInfo | null,
    isLoading: false as boolean
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState: initState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getInfo.pending, state => {
                state.isLoading = true;
            })
            .addCase(getInfo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.info = action.payload;
            })
            .addCase(getInfo.rejected, (state, action) => {
                state.isLoading = false;

                throw action.payload;
            })
    }
})

export default taskSlice.reducer;