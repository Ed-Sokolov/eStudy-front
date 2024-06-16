import React from "react";
import "./header.scss";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { NavLink} from "react-router-dom";
import { type TUser } from "../../type/User";
import { HeaderUser } from "./User";
import { HeaderLog } from "./Log";
import {HeaderCreating} from "./Creating";

type THeader = {
    isAuth: boolean
    user: TUser | null
    logOut: () => void
}

export const Header: React.FC<THeader> = (
    {
        user,
        isAuth,
        logOut
    }
) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="logo__wrapper">
                        <Logo/>
                    </div>

                    <nav className="nav">
                        <ul className="menu">
                            {/* <li className="menu__item">
                                <NavLink to={'/'} className={'link'}>
                                    Main
                                </NavLink>
                            </li> */}
                            <li className="menu__item">
                                <NavLink to={'/rooms'} className={'link'}>
                                    Courses
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    {
                        isAuth && user
                            ? <HeaderUser user={user} logOut={logOut} />
                            : <HeaderLog />
                    }

                    {
                        ( isAuth && user && ( user.role === 'administrator' || user.role === 'teacher' ))
                            && <HeaderCreating />
                    }
                </div>
            </div>
        </header>
    )
}