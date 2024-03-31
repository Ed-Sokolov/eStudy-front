import React from "react";
import "./room.scss";
import {type TRoom} from "../../type/Room";

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
            <a href={id.toString()} className="room__link"></a>
        </div>
    )
}