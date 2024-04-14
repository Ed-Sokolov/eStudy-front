import React from "react";
import "./room.scss";
import {type TRoom} from "../../type/Room";
import {NavLink} from "react-router-dom";

export const Room: React.FC<TRoom> = (
    {
        author,
        title,
        id
    }
) => {
    return (
        <div className="room">
            <h2 className="room__title">{title}</h2>
            <p className="room__author">{author}</p>
            <NavLink to={'/rooms/1'} className={'room__link'}></NavLink>
        </div>
    )
}