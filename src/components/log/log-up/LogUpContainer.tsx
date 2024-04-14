import React from "react";
import {LogUp} from "./LogUp";
import { type TLogUpForm } from "../../../type/log/LogUpForm";

export const LogUpContainer: React.FC = () => {
    const initValues: TLogUpForm = {
        email: '',
        password: '',
        confirm_password: '',
    }

    const submit = (values: TLogUpForm): void => {
        console.log(values);
    }

    return <LogUp initValues={initValues} submit={submit}/>
}