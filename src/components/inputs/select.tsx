import React from 'react';
import { FormikErrors, useField, useFormikContext } from 'formik';
import Select, { ActionMeta, MultiValue, SingleValue } from 'react-select';
import { type TSelectOption } from "../../type/select/Option";

export const CustomSelect: React.FC<{
    name: string;
    options: TSelectOption[];
    isMulti?: boolean;
    closeMenuOnSelect?: boolean;
}> = ({ name, options, isMulti = false, closeMenuOnSelect = true }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(name);

    type THandleChange = (
        value: MultiValue<TSelectOption> | SingleValue<TSelectOption>,
        actionMeta: ActionMeta<TSelectOption>
    ) => Promise<void | FormikErrors<unknown>>

    const handleChange: THandleChange = (
        value,
        actionMeta
    ) => {
        const newValue = isMulti
            ? (value as MultiValue<TSelectOption>).map((option) => option.value)
            : (value as SingleValue<TSelectOption>)?.value;

        return setFieldValue(field.name, newValue);
    };

    const handleBlur = () => {
        field.onBlur({
            target: {
                name: field.name,
            },
        });
    };

    return (
        <Select
            id={name}
            options={options}
            isMulti={isMulti}
            closeMenuOnSelect={closeMenuOnSelect}
            onChange={handleChange}
            onBlur={handleBlur}
        />
    );
};
