import React, { useEffect } from 'react';
import "./app.scss";
import { HeaderContainer } from "./components/header/HeaderContainer";
import { Router } from "./components/routes/Routes";
import { useAppDispatch, useAppSelector } from "./hooks";
import { checkAuth } from "./API/auth";
import { useLocation, useNavigate } from "react-router-dom";

const App: React.FC = () => {
    const
        {
            isAuth
        } = useAppSelector(state => state.auth),
        dispatch = useAppDispatch(),
        navigate = useNavigate(),
        location = useLocation();

    useEffect(() => {
        dispatch(checkAuth());
    }, [dispatch])

    useEffect(() => {
        if (!isAuth && location.pathname !== '/log-in' && location.pathname !== '/log-up')
        {
            navigate('log-in')
        } else if (isAuth && (location.pathname === '/log-in' || location.pathname === '/log-up'))
        {
            navigate('')
        }
    }, [isAuth, navigate]);

    return (
      <div className="app-inner">
          <HeaderContainer/>

          <main>
              <Router />
          </main>
      </div>
  )
}

export default App;
