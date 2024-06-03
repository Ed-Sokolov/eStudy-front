import React, {ReactElement, useCallback, useEffect, useState} from "react";
import { useDropzone } from "react-dropzone";
import "./dropzone.scss";
import { useFormikContext } from "formik";
import { AcceptedFiles } from "./files/Accepted";
import { ReactComponent as DocIcon } from "../../assets/img/files/doc.svg";
import { ReactComponent as PDFIcon } from "../../assets/img/files/pdf.svg";
import { ReactComponent as ArchiveIcon } from "../../assets/img/files/archive.svg";
import { ReactComponent as TextIcon } from "../../assets/img/files/text.svg";
import { ReactComponent as ExcelIcon } from "../../assets/img/files/excel.svg";
import { ReactComponent as PointIcon } from "../../assets/img/files/point.svg";
import { type TAttachment } from "../../type/Attachment";
import {OldFiles} from "./files/Old";

export interface DropzoneFile extends File {
    preview: string | ReactElement
}

type TDropzone = {
    name: string
    oldFiles?: TAttachment[]
    removeOldFile?: (value: number) => void
}

const fileFormats: string[] = [
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/pdf',
    'application/zip',
    'application/x-rar-compressed',
    'text/plain',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
];

type FileFormat = (typeof fileFormats)[number];

const fileIcons: {[k in FileFormat]: ReactElement} = {
    'application/msword': <DocIcon />,
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': <DocIcon />,
    'application/pdf': <PDFIcon />,
    'application/zip': <ArchiveIcon />,
    'application/x-rar-compressed': <ArchiveIcon />,
    'text/plain': <TextIcon />,
    'application/vnd.ms-excel': <ExcelIcon />,
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': <ExcelIcon />,
    'application/vnd.ms-powerpoint': <PointIcon />,
    'application/vnd.openxmlformats-officedocument.presentationml.presentation': <PointIcon />,
}

export const Dropzone: React.FC<TDropzone> = (
    {
        name,
        oldFiles,
        removeOldFile
    }
) => {
    const [files, setFiles] = useState<DropzoneFile[]>([])

    const { setFieldValue } = useFormikContext();

    useEffect( () => {
        setFieldValue(name, files);
    }, [files, setFieldValue, name]);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length)
        {
            setFiles(prevFiles => [
                ...prevFiles,
                ...acceptedFiles.map(file => {
                    let isFileFormat: boolean = false


                    if (fileFormats.includes(file.type))
                    {
                        isFileFormat = true
                    }

                    return Object.assign(file, { preview: isFileFormat ? fileIcons[file.type] : URL.createObjectURL(file) })
                })
            ])
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
            'application/x-rar-compressed': ['.rar'],
            'text/plain': ['.txt'],
            'application/vnd.ms-excel': ['.xls'],
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
            'application/vnd.ms-powerpoint': ['.ppt'],
            'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx']
        },
        maxSize: 10485760 // 10MB
    })

    const removeFile = (lastModified: number): void => {
        setFiles(files.filter(file => file.lastModified !== lastModified))
    }

    const removeAllAttachments = (): void => {
        setFiles([])
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
                && <div className="remove__bnt remove__bnt-all" onClick={removeAllAttachments}>
                    Remove All Attachments
                </div>
            }

            {
                files.length > 0
                    && <AcceptedFiles files={files} removeFile={removeFile} />
            }

            {
                (oldFiles && oldFiles.length > 0 && removeOldFile)
                    && <OldFiles removeFile={removeOldFile} files={oldFiles} />
            }
        </div>
    )
}