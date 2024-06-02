import { createSlice } from "@reduxjs/toolkit";
import { getGroups } from "../../API/group";
import { type TSelectOption } from "../../type/select/Option";

const initialState = {
    groups: [] as TSelectOption[]
}

const groupSlice = createSlice({
    name: 'group',
    initialState,
    reducers: {},
    extraReducers: (builder): void => {
        builder
            .addCase(getGroups.fulfilled, (state, action) => {
                state.groups = action.payload;
            })
            .addCase(getGroups.rejected, (state, action) => {
                state.groups = [];

                throw action.payload;
            })
    }
})

export default groupSlice.reducer;