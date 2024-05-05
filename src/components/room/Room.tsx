import React from "react";
import "./room.scss";
import {type TRoom} from "../../type/Room";
import {NavLink} from "react-router-dom";

export const Room: React.FC<TRoom> = (
    {
        author,
        name,
        id
    }
) => {
    return (
        <div className="room">
            <h2 className="room__title">{name}</h2>
            <p className="room__author">{author.name}</p>
            <NavLink to={`/rooms/${id}`} className={'room__link'} />
        </div>
    )
}