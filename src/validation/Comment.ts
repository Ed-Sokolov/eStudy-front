import { object, string } from "yup";

export const CommentSchema = object({
    content: string()
        .min(3, "Content must be more than 3 characters")
        .max(777, "Content must be less than 777 characters")
        .required("Content is required!")
})