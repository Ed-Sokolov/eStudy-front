import React from 'react';
import "./app.scss";
import {HeaderContainer} from "./components/header/HeaderContainer";
import {type TRoom} from "./type/Room";
import {Room} from "./components/room/Room";

const App: React.FC = () => {
    const rooms: TRoom[] = [
        {
            id: 1,
            title: 'Web technology',
            author: 'Sokolov E.O.',
        },
        {
            id: 2,
            title: 'Backend-End',
            author: 'Sokolov E.O.'
        },
        {
            id: 3,
            title: 'UI/UX',
            author: 'Sokolov E.O.'
        },
        {
            id: 4,
            title: 'Front-End',
            author: 'Sokolov E.O.'
        },
    ]
    return (
      <div className="app-inner">
          <HeaderContainer/>

          <main>
              <div className="container">
                  <div className="room-list">
                      {rooms.map((room: TRoom) => <Room key={room.id} {...room}/>)}
                  </div>
              </div>
          </main>
      </div>
  )
}

export default App;
