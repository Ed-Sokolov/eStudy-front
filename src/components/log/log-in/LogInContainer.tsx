import React from "react";
import {LogIn} from "./LogIn";
import {TLogInForm} from "../../../type/log/LogInForm";

export const LogInContainer: React.FC = () => {
    const initValues: TLogInForm = {
        email: '',
        password: '',
        remember: false
    }

    const submit = (values: TLogInForm) => {
        console.log(values);
    }

    return <LogIn initValues={initValues} submit={submit} />
}