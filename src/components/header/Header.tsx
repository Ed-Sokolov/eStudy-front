import React from "react";
import "./header.scss";
import {ReactComponent as Logo} from "../../assets/img/logo.svg";
import {ReactComponent as Divider} from "../../assets/img/divider.svg";
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
                                <NavLink to={'/'} className={'link'}>
                                    Main
                                </NavLink>
                            </li>
                            <li className="menu__item">
                                <NavLink to={'/rooms'} className={'link'}>
                                    Rooms
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <ul className="header__log">
                        <li className="header__log-item">
                            <NavLink to={'/log-in'} className={'link'}>Log In</NavLink>
                        </li>
                        <li className="header__log-item">
                            <div className="vertical-divider">
                                <Divider />
                            </div>
                        </li>
                        <li className="header__log-item">
                            <NavLink to={'/log-up'} className={'link'}>Log Up</NavLink>
                        </li>
                    </ul>

                    {/*<div className="header__user">*/}
                    {/*    Sokolov E. O.*/}
                    {/*</div>*/}
                </div>
            </div>
        </header>
    )
}