import React from 'react';
import "./app.scss";
import {HeaderContainer} from "./components/header/HeaderContainer";
import {Router} from "./components/routes/Routes";

const App: React.FC = () => {
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
