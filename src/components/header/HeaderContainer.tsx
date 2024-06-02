import React from "react";
import { Header } from "./Header";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { logOut } from "../../API/auth";

export const HeaderContainer: React.FC = () => {
    const
        {
            isAuth,
            user
        } = useAppSelector(state => state.auth),
        dispatch = useAppDispatch()

    const logOutHandler = () => {
        dispatch(logOut())
    }

    return <Header user={user} isAuth={isAuth} logOut={logOutHandler} />
}