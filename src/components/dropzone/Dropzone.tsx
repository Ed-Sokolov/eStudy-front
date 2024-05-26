import React, {useCallback, useEffect, useState} from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import "./dropzone.scss";
import {FormikErrors, useField, useFormikContext} from "formik";

interface DropzoneFile extends File {
    preview: string
}

type TDropzone = {
    name: string
}

export const Dropzone: React.FC<TDropzone> = (
    {
        name
    }
) => {
    const [files, setFiles] = useState<DropzoneFile[]>([])
    const [rejectedFiles, setRejectedFiles] = useState<FileRejection[]>([])

    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);

    useEffect( () => {
        setFieldValue(name, files);
    }, [files, setFieldValue, name]);

    const onDrop = useCallback((acceptedFiles: File[], fileRejections: FileRejection[]) => {
        if (acceptedFiles.length)
        {
            setFiles(prevFiles => [
                ...prevFiles,
                ...acceptedFiles.map(file => {
                    return Object.assign(file, { preview: URL.createObjectURL(file) })
                })
            ])
        }

        if (fileRejections.length)
        {
            setRejectedFiles(prevFiles => [...prevFiles, ...fileRejections])
        }
    }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        accept: {
            'image/jpeg': ['.jpeg'],
            'image/jpg': ['.jpg'],
            'image/png': ['.png'],
            'image/svg': ['.svg'],
            'image/webp': ['.webp'],
            'application/msword': ['.doc'],
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
            'application/pdf': ['.pdf'],
            'application/zip': ['.zip'],
            'application/x-rar-compressed': ['.rar']
        },
        maxSize: 20971520 // 20MB
    })

    const removeFile = (lastModified: number): void => {
        setFiles(files.filter(file => file.lastModified !== lastModified))
    }

    const removeRejectedFile = (lastModified: number): void => {
        setRejectedFiles(rejectedFiles.filter(({file}) => file.lastModified !== lastModified))
    }

    const removeAllAttachments = (): void => {
        setFiles([])
        setRejectedFiles([])
    }

    return (
        <div className="dropzone__content">
            <div {...getRootProps()} className="dropzone">
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop some files here, or click to select files</p>
                }
            </div>

            {files.length > 0
                ? <div onClick={removeAllAttachments}>
                    Remove All Attachments
                </div>
                : <></>
            }

            <ul>
                {files.map(file => <li key={file.lastModified}>
                    <img src={file.preview} alt="" width={100} height={100}/>
                    {file.name}
                    <div onClick={() => removeFile(file.lastModified)}>
                        remove
                    </div>
                </li>)}
            </ul>

            <ul>
                {rejectedFiles.map(({file, errors}) => <li key={file.lastModified}>
                    {file.name}

                    <div>
                        {errors.map((error, index) => <div key={index}>
                            {error.message}
                        </div>)}
                    </div>

                    <div onClick={() => removeRejectedFile(file.lastModified)}>
                        remove
                    </div>
                </li>)}
            </ul>
        </div>
    )
}