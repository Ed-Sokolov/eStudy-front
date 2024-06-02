import React, { useEffect } from "react";
import { LogUp } from "./LogUp";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { getGroups } from "../../../API/group";
import { checkAuth, register } from "../../../API/auth";
import { FormikHelpers } from "formik";
import { type TLogUpForm } from "../../../type/log/LogUpForm";

export const LogUpContainer: React.FC = () => {
    const
        {
            groups
        } = useAppSelector(state => state.group),
        dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getGroups())
    }, []);

    const initValues: TLogUpForm = {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        group_id: null
    }

    const submit = (values: TLogUpForm, actions: FormikHelpers<TLogUpForm>): void => {
        dispatch(register(values))
            .then(() => {
                dispatch(checkAuth())
            })
            .catch(error => {
                for (const errorKey in error.errors) {
                    actions.setFieldError(errorKey, error.errors[errorKey][0])
                }
            })
    }

    return <LogUp initValues={initValues} submit={submit} groups={groups} />
}