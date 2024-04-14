import {Route, Routes} from "react-router-dom";
import {RoomsContainer} from "../rooms/RoomsContainer";
import {TasksContainer} from "../tasks/TasksContainer";
import {LogInContainer} from "../log/log-in/LogInContainer";
import {LogUpContainer} from "../log/log-up/LogUpContainer";

export const Router = () => {
    return (
        <Routes>
            <Route path={'/'} element={<RoomsContainer />}/>
            <Route path={'/rooms'} element={<RoomsContainer />}/>
            <Route path={'/rooms/:id'} element={<TasksContainer />}/>

            <Route path={'/log-in'} element={<LogInContainer />}/>
            <Route path={'/log-up'} element={<LogUpContainer />}/>
        </Routes>
    )
}