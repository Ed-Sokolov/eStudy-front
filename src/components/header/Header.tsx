import React from "react";
import "./header.scss";
import {ReactComponent as Logo} from "../../assets/img/logo.svg";
import {NavLink} from "react-router-dom";

export const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="logo__wrapper">
                        <Logo/>
                    </div>

                    <nav className="nav">
                        <ul className="menu">
                            <li className="menu__item">
                                <NavLink to={'/'}>
                                    Main
                                </NavLink>
                            </li>
                            <li className="menu__item">
                                <NavLink to={'/rooms'}>
                                    Rooms
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <div className="header__user">
                        Sokolov E. O.
                    </div>
                </div>
            </div>
        </header>
    )
}