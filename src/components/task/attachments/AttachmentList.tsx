import React, {ReactElement} from "react";
import { type TAttachment } from "../../../type/Attachment";
import "./attachments.scss";
import { ReactComponent as DocIcon } from "../../../assets/img/files/doc.svg";
import { ReactComponent as PDFIcon } from "../../../assets/img/files/pdf.svg";
import { ReactComponent as ArchiveIcon } from "../../../assets/img/files/archive.svg";
import { ReactComponent as TextIcon } from "../../../assets/img/files/text.svg";
import { ReactComponent as ExcelIcon } from "../../../assets/img/files/excel.svg";
import { ReactComponent as PointIcon } from "../../../assets/img/files/point.svg";

type TAttachmentList = {
    attachments: TAttachment[]
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

export const AttachmentList: React.FC<TAttachmentList> = (
    {
        attachments
    }
) => {
    return (
        <div className="attachments__list-wrapper">
            <ul className="attachments__list">
                {
                    attachments.map((attachment: TAttachment) => <li key={attachment.id} className="attachments__list-item">
                        <div className="attachment">
                            <div className="attachment__preview-wrapper">
                                {
                                    attachment.type !== 'image'
                                        ? fileIcon[attachment.type]
                                        : <img src={attachment.url} alt=""/>
                                }
                            </div>

                            <div className="attachment__name">
                                {attachment.original_name}
                            </div>

                            <a href={attachment.url} target="_blank" download className="attachment__link"></a>
                        </div>
                    </li>)
                }
            </ul>
        </div>
    )
}