import { object, string, number } from "yup";

export const TaskSchema = object({
    name: string()
        .min(4, "Too short!")
        .max(50, "Too long!")
        .required("Name is required!"),
    room_id: number()
        .min(1, "Select a room")
        .required('Room is required'),
    status_id: number()
        .min(1, "Select a status")
        .required('Status is required'),
    type_id: number()
        .min(1, "Select a task")
        .required('Type is required')
})