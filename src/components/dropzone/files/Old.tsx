import React, { ReactElement } from "react";
import { type TAttachment } from "../../../type/Attachment";
import { ReactComponent as RemoveIcon } from "../../../assets/img/remove.svg";
import { ReactComponent as DocIcon } from "../../../assets/img/files/doc.svg";
import { ReactComponent as PDFIcon } from "../../../assets/img/files/pdf.svg";
import { ReactComponent as ArchiveIcon } from "../../../assets/img/files/archive.svg";
import { ReactComponent as TextIcon } from "../../../assets/img/files/text.svg";
import { ReactComponent as ExcelIcon } from "../../../assets/img/files/excel.svg";
import { ReactComponent as PointIcon } from "../../../assets/img/files/point.svg";

type TAcceptedFiles = {
    files: TAttachment[]
    removeFile: (value: number) => void
}

type TAttachmentType = 'doc' | 'pdf' | 'archive' | 'text' | 'excel' | 'point'

const fileIcon: {[key in TAttachmentType]: ReactElement} = {
    doc: <DocIcon />,
    pdf: <PDFIcon />,
    archive: <ArchiveIcon />,
    text: <TextIcon />,
    excel: <ExcelIcon />,
    point: <PointIcon />,
}

export const OldFiles: React.FC<TAcceptedFiles> = (
    {
        files,
        removeFile
    }
) => {
    return (
        <div className="accepted__list-wrapper">
            <h3 className="dropzone__title">Old Files</h3>

            <ul className="accepted__list">
                {files.map(file => <li className="accepted__list-item" key={file.id}>
                    <div className="accepted-item">
                        <div className="accepted-item__img-wrapper">
                            {
                                file.type !== 'image'
                                    ? fileIcon[file.type]
                                    : <img src={file.url} alt=""/>
                            }
                        </div>

                        <div className="accepted-item__name">
                            {file.original_name}
                        </div>

                        <div className="remove__icon-wrapper" onClick={() => removeFile(file.id)}>
                            <RemoveIcon className="remove__icon"/>
                        </div>
                    </div>
                </li>)}
            </ul>
        </div>
    )
}