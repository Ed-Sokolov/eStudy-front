import { type TTaskItem } from "./TaskItem";
import { type TRoom } from "./Room";

export type TRoomTask = {
    tasks: TTaskItem[]
    room: TRoom
}