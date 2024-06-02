import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "./room/RoomSlice";
import taskReducer from "./task/TaskSlice";
import authReducer from "./auth/AuthSlice";
import groupReducer from "./group/GroupSlice";
import studentReducer from "./student/StudentSlice";

const store = configureStore({
    reducer: {
        room: roomReducer,
        task: taskReducer,
        auth: authReducer,
        group: groupReducer,
        student: studentReducer
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;