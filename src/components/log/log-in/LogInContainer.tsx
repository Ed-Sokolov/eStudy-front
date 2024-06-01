import React from "react";
import { LogIn } from "./LogIn";
import { type TLogInForm } from "../../../type/log/LogInForm";
import { useAppDispatch } from "../../../hooks";
import { checkAuth, login } from "../../../API/auth";
import { FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";

export const LogInContainer: React.FC = () => {
    const
        dispatch = useAppDispatch(),
        navigate = useNavigate()

    const initValues: TLogInForm = {
        email: '',
        password: '',
        remember: false
    }

    const submit = (values: TLogInForm, actions: FormikHelpers<TLogInForm>) => {
        dispatch(login(values))
            .then(() => {
                dispatch(checkAuth())
            })
            .catch(error => {
                for (const errorKey in error.errors) {
                    actions.setFieldError(errorKey, error.errors[errorKey][0])
                }
            })
    }

    return <LogIn initValues={initValues} submit={submit} />
}