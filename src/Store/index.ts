import {configureStore} from "@reduxjs/toolkit";
import roomReducer from "./room/RoomSlice";

const store = configureStore({
    reducer: {
        room: roomReducer,
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;