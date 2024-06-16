import { object, string, ref } from "yup";

export const LogUpSchema = object({
    email: string()
        .email("Email must be email type")
        .required("Email is required"),
    name: string()
        .min(4, "Too short!")
        .max(50, "Too long!")
        .required("Name is required!"),
    password: string()
        .min(8, "Password must be more than 8 characters")
        .max(24, "Password must be less than 24 characters")
        .required("Password is required!"),
    password_confirmation: string()
        .oneOf([ref("password")], "Passwords must match")
        .required("Password confirmation is required!")
})