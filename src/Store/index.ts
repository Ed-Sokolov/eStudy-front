import {configureStore} from "@reduxjs/toolkit";
import roomReducer from "./room/RoomSlice";
import taskReducer from "./task/TaskSlice";
import authReducer from "./auth/AuthSlice";

const store = configureStore({
    reducer: {
        room: roomReducer,
        task: taskReducer,
        auth: authReducer
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;