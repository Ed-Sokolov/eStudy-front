import { object, string } from "yup";

export const RoomSchema = object({
    name: string()
        .min(4, "Too short!")
        .max(50, "Too long!")
        .required("Name is required!"),
})