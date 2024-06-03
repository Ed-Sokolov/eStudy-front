import React from "react";
import "./room.scss";
import { NavLink } from "react-router-dom";
import { type TRoom } from "../../type/Room";
import { type TUser } from "../../type/User";

export const Room: React.FC<TRoom & {
    user: TUser | null
}> = (
    {
        author,
        name,
        id,
        user
    }
) => {
    const isEditable = (user && user.role === 'administrator') || (user && user.role === 'teacher' && user.id === author.id)

    return (
        <div className="room">
            <h2 className="room__title">{name}</h2>
            <p className="room__author">{author.name}</p>
            <NavLink to={`/rooms/${id}`} className={'room__link'} />

            {
                isEditable && <NavLink to={`/edit/rooms/${id}`} className={'room__link-edit'}>Edit</NavLink>
            }
        </div>
    )
}