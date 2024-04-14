import React from "react";
import {type TRoom} from "../../type/Room";
import {Rooms} from "./Rooms";

export const RoomsContainer: React.FC = () => {
    const rooms: TRoom[] = [
        {
            id: 1,
            title: 'Web technology',
            author: 'Sokolov E.O.',
        },
        {
            id: 2,
            title: 'Backend-End',
            author: 'Sokolov E.O.'
        },
        {
            id: 3,
            title: 'UI/UX',
            author: 'Sokolov E.O.'
        },
        {
            id: 4,
            title: 'Front-End',
            author: 'Sokolov E.O.'
        },
        {
            id: 5,
            title: 'Computer Networks',
            author: 'Sokolov E.O.'
        },
    ]

    return (
        <div className="container">
            <div className="rooms-page">
                <h1 className="title">Your Rooms</h1>

                <Rooms rooms={rooms} />
            </div>
        </div>
    )
}