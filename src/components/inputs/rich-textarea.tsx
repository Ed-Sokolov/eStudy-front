import ReactQuill from "react-quill";
import React from "react";
import 'react-quill/dist/quill.snow.css';
import {FormikErrors, useField, useFormikContext} from "formik";

type TReactQuillWrapper = {
    name: string
    id: string
    placeholder: string
    initValue?: string
}

export const ReactQuillWrapper: React.FC<TReactQuillWrapper> = (
    {
        name,
        placeholder,
        id,
        initValue
    }
) => {
    const { setFieldValue, setFieldTouched } = useFormikContext()
    const [field] = useField(name)

    const modules = {
        toolbar: [
            [{'header': [1, 2, 3, 4, 5, 6, false]}],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link'],
            ['clean']
        ],
    }

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link'
    ]

    type THandleChange = (
        value: string,
    ) => Promise<void | FormikErrors<unknown>>

    const handleChange: THandleChange = (
        value
    ) => {
        return setFieldValue(field.name, value);
    };

    type THandleBlur = () => Promise<void | FormikErrors<unknown>>

    const handleBlur: THandleBlur = () => {
        field.onBlur({
            target: {
                name: field.name,
            },
        });

        return setFieldTouched(field.name, true)
    };

    return <ReactQuill theme={"snow"}
                       className={"textarea"}
                       modules={modules}
                       formats={formats}
                       id={id}
                       defaultValue={initValue}
                       placeholder={placeholder}
                       onChange={e => setFieldValue(name, e)}
                       onBlur={() => setFieldTouched(name, true)} />
}