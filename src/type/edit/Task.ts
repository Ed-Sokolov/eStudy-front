import { type TTask } from "../Task";

export type TEditTask = TTask & {
    author_id: number
    room_id: number
    status_id: number
    type_id: number
    new_attachments: File[]
    description: string
}