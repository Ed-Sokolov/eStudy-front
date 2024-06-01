import React from "react";
import { Header } from "./Header";
import { useAppSelector } from "../../hooks";

export const HeaderContainer: React.FC = () => {
    const { isAuth, user } = useAppSelector(state => state.auth)
    return <Header user={user} isAuth={isAuth} />
}