import React from "react";
import {Field} from "formik";
import {TInputCheckbox} from "../../type/inputs/Checkbox";
import "./inputs.scss";

export const InputCheckbox: React.FC<TInputCheckbox> = (
    {
        name,
        id
    }
) => {
    return (
        <div className="input-checkbox">
            <Field type={'checkbox'} name={name} id={id}/>

            <svg viewBox="0 0 35.6 35.6">
                <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
                <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
            </svg>
        </div>
)
}