import React from "react";
import "./rooms.scss";
import { Room } from "../room/Room";
import { type TRoom } from "../../type/Room";
import { type TUser } from "../../type/User";

type TRooms = {
    rooms: TRoom[]
}

export const Rooms: React.FC<TRooms & {
    user: TUser | null
}> = (
    {
        rooms,
        user
    }
) => {
    return (
        <div className="room-list">
            {rooms.map((room: TRoom) => <Room user={user} key={room.id} {...room}/>)}
        </div>
    )
}