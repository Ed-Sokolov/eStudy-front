import React from "react";
import "./rooms.scss";
import {type TRoom} from "../../type/Room";
import {Room} from "../room/Room";

type TRooms = {
    rooms: TRoom[]
}

export const Rooms: React.FC<TRooms> = (
    {
        rooms
    }
) => {
    return (
        <div className="room-list">
            {rooms.map((room: TRoom) => <Room key={room.id} {...room}/>)}
        </div>
    )
}