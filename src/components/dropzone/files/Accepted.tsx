import React from "react";
import { DropzoneFile } from "../Dropzone";

import { ReactComponent as RemoveIcon } from "../../../assets/img/remove.svg";

type TAcceptedFiles = {
    files: DropzoneFile[]
    removeFile: (value: number) => void
}

export const AcceptedFiles: React.FC<TAcceptedFiles> = (
    {
        removeFile,
        files
    }
) => {
    return (
        <div className="accepted__list-wrapper">
            <h3 className="dropzone__title">Accepted Files</h3>

            <ul className="accepted__list">
                {files.map(file => <li className="accepted__list-item" key={file.lastModified}>
                    <div className="accepted-item">
                        <div className="accepted-item__img-wrapper">
                            {
                                typeof file.preview === 'string'
                                    ? <img src={file.preview} alt="" width={100} height={100}/>
                                    : file.preview
                            }
                        </div>

                        <div className="accepted-item__name">
                            {file.name}
                        </div>

                        <div className="remove__icon-wrapper" onClick={() => removeFile(file.lastModified)}>
                            <RemoveIcon className="remove__icon"/>
                        </div>
                    </div>
                </li>)}
            </ul>
        </div>
    )
}