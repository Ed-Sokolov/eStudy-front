import { object, string } from "yup";

export const LogInSchema = object({
    email: string()
        .email("Email must be email type")
        .required("Email is required"),
    password: string()
        .min(8, "Password must be more than 8 characters")
        .max(24, "Password must be less than 24 characters")
        .required("Password is required!")
})