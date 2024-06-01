import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Divider } from "../../assets/img/divider.svg";

export const HeaderLog: React.FC = () => {
    return (
        <ul className="header__log">
            <li className="header__log-item">
                <NavLink to={'/log-in'} className={'link'}>Log In</NavLink>
            </li>
            <li className="header__log-item">
                <div className="vertical-divider">
                    <Divider/>
                </div>
            </li>
            <li className="header__log-item">
                <NavLink to={'/log-up'} className={'link'}>Log Up</NavLink>
            </li>
        </ul>
    )
}