import React from "react";
import { type TUser } from "../../type/User";
import { ReactComponent as Divider } from "../../assets/img/divider.svg";

type THeaderUser = {
    user: TUser
}

export const HeaderUser: React.FC<THeaderUser> = (
    {
        user
    }
) => {
    return (
        <ul className="header__log">
            <li className="header__log-item">
                {user.name}
            </li>
            <li className="header__log-item">
                <div className="vertical-divider">
                    <Divider/>
                </div>
            </li>
            <li className="header__log-item">
                Log Out
            </li>
        </ul>
    )
}