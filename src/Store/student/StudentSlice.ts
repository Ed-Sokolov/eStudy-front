import { createSlice } from "@reduxjs/toolkit";
import { getStudents } from "../../API/students";
import { type TSelectOption } from "../../type/select/Option";

const initialState = {
    students: [] as TSelectOption[]
}

const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {},
    extraReducers: (builder): void => {
        builder
            .addCase(getStudents.fulfilled, (state, action) => {
                state.students = action.payload;
            })
            .addCase(getStudents.rejected, (state, action) => {
                state.students = [];

                throw action.payload;
            })
    }
})

export default studentSlice.reducer;