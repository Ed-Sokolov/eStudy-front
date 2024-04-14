import React from 'react';
import "./app.scss";
import {HeaderContainer} from "./components/header/HeaderContainer";
import {RoomsContainer} from "./components/rooms/RoomsContainer";
import {TasksContainer} from "./components/tasks/TasksContainer";

const App: React.FC = () => {
    return (
      <div className="app-inner">
          <HeaderContainer/>

          <main>
              <RoomsContainer />
              <TasksContainer />
          </main>
      </div>
  )
}

export default App;
