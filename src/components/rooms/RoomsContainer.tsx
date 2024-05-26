import React, { useEffect } from "react";
import { Rooms } from "./Rooms";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getRooms } from "../../API/rooms";

export const RoomsContainer: React.FC = () => {
    const {rooms} = useAppSelector(state => state.room);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getRooms())
    }, [])

    return (
        <div className="container">
            <div className="rooms-page">
                <h1 className="title">Your Rooms</h1>

                {rooms !== null ?
                    <Rooms rooms={rooms} />
                    : 'Something Wrong...'
                }
            </div>
        </div>
    )
}