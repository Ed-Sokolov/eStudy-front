import {Route, Routes} from "react-router-dom";
import {RoomsContainer} from "../rooms/RoomsContainer";
import {TasksContainer} from "../tasks/TasksContainer";

export const Router = () => {
    return (
        <Routes>
            <Route path={'/'} element={<RoomsContainer />}/>
            <Route path={'/rooms'} element={<RoomsContainer />}/>
            <Route path={'/rooms/:id'} element={<TasksContainer />}/>
        </Routes>
    )
}