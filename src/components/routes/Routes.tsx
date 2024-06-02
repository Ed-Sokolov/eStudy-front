import { Route, Routes } from "react-router-dom";
import { RoomsContainer } from "../rooms/RoomsContainer";
import { TasksContainer } from "../tasks/TasksContainer";
import { LogInContainer } from "../log/log-in/LogInContainer";
import { LogUpContainer } from "../log/log-up/LogUpContainer";
import { CreateRoomContainer } from "../create/room/CreateRoomContainer";
import { CreateTaskContainer } from "../create/task/CreateTaskContainer";
import { TaskContainer } from "../task/TaskContainer";
import { EditRoomContainer } from "../edit/room/EditRoomContainer";
import { EditTaskContainer } from "../edit/task/EditTaskContainer";

export const Router = () => {
    return (
        <Routes>
            <Route path={'/'} element={<RoomsContainer />}/>
            <Route path={'/rooms'} element={<RoomsContainer />}/>
            <Route path={'/rooms/:id'} element={<TasksContainer />}/>
            <Route path={'/rooms/:roomID/tasks/:taskID'} element={<TaskContainer />}/>

            <Route path={'/log-in'} element={<LogInContainer />}/>
            <Route path={'/log-up'} element={<LogUpContainer />}/>

            <Route path={'/create/room'} element={<CreateRoomContainer />}/>
            <Route path={'/create/task'} element={<CreateTaskContainer />}/>

            <Route path={'/edit/rooms/:id'} element={<EditRoomContainer />}/>
            <Route path={'/edit/tasks/:id'} element={<EditTaskContainer />}/>
        </Routes>
    )
}