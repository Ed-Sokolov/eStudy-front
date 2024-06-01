import React from "react";
import "./header.scss";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { NavLink} from "react-router-dom";
import { type TUser } from "../../type/User";
import { HeaderUser } from "./User";
import { HeaderLog } from "./Log";

type THeader = {
    isAuth: boolean
    user: TUser | null
}

export const Header: React.FC<THeader> = (
    {
        user,
        isAuth
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

                    {
                        isAuth && user
                            ? <HeaderUser user={user} />
                            : <HeaderLog />
                    }

                    <div className="header__new-wrapper">
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M32 64C40.4869 64 48.6263 60.6286 54.6274 54.6274C60.6286 48.6263 64 40.4869 64 32C64 23.5131 60.6286 15.3737 54.6274 9.37258C48.6263 3.37142 40.4869 0 32 0C23.5131 0 15.3737 3.37142 9.37258 9.37258C3.37142 15.3737 0 23.5131 0 32C0 40.4869 3.37142 48.6263 9.37258 54.6274C15.3737 60.6286 23.5131 64 32 64ZM29 43V35H21C19.3375 35 18 33.6625 18 32C18 30.3375 19.3375 29 21 29H29V21C29 19.3375 30.3375 18 32 18C33.6625 18 35 19.3375 35 21V29H43C44.6625 29 46 30.3375 46 32C46 33.6625 44.6625 35 43 35H35V43C35 44.6625 33.6625 46 32 46C30.3375 46 29 44.6625 29 43Z"
                                fill="black"/>
                        </svg>

                        <div className="new__list-wrapper">
                            <ul className="new__list">
                                <li className="new__list-item">
                                    <NavLink to={'/create/room'} className={'link'}>Room</NavLink>
                                </li>
                                <li className="new__list-item">
                                    <NavLink to={'/create/task'} className={'link'}>Task</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}