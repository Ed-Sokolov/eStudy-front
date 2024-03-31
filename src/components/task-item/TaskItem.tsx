import React from "react";
import "./task-item.scss";
import {type TTaskItem} from "../../type/TaskItem";

export const TaskItem: React.FC<TTaskItem> = (
    {
        id,
        author,
        title,
        category,
        date
    }
) => {
    return (
        <div className="task-item">
            <div className="task-item__info">
                <div className="task-item__info-author">{author}</div>
                <div className="task-item__info-date">{date}</div>
            </div>

            <h3 className="task-item__title">{title}</h3>

            <p className="task-item__category">{category}</p>

            <a href={id.toString()} className="task-item__link"></a>
        </div>
    )
}