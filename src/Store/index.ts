import {configureStore} from "@reduxjs/toolkit";
import roomReducer from "./room/RoomSlice";
import taskReducer from "./task/TaskSlice";

const store = configureStore({
    reducer: {
        room: roomReducer,
        task: taskReducer,
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;