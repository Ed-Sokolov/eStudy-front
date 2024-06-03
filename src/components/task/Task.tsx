import React from "react";
import "./task.scss";
import parse from "html-react-parser";
import { AttachmentList } from "./content/AttachmentList";
import { NavLink } from "react-router-dom";
import { type TTask as TTaskContent } from "../../type/Task";
import { type TUser } from "../../type/User";

type TTask = {
    currentTab: 'content' | 'attachments'
    setCurrentTab: (value: 'content' | 'attachments') => void
    task: TTaskContent
    user: TUser | null
}

export const Task: React.FC<TTask> = ({
    currentTab,
    setCurrentTab,
    task,
    user
}) => {
    const isEditable = (user && user.role === 'administrator') || (user && user.id === task.author.id)

    return (
        <div className="container">
            <div className="task">
                <div className="task__header">
                    <div className="task__room-name">{task.room.name}</div>

                    <div className="task__header-info">
                        <div className="task__header-author">{task.author.name}</div>

                        <div className="task__header-date">/-- {task.date} --/</div>
                    </div>

                    <div className="task__title-wrapper">
                        <h1 className="task__title">
                            {task.name}

                            {
                                isEditable && <NavLink to={`/edit/tasks/${task.id}`} className={'room__link-edit'}>Edit</NavLink>
                            }
                        </h1>

                        <p className="task__title-subtitle">{task.type.name}</p>
                    </div>
                </div>

                <div className="task__content-wrapper">
                    <nav className="task-nav">
                        <ul className="task-nav__list">
                            <li className="task-nav__list-item">
                                <div className={`tab-item ${currentTab === 'content' && 'active'}`} data-tab-id="content" onClick={() => setCurrentTab('content')}>
                                    Content
                                </div>
                            </li>
                            <li className="task-nav__list-item">
                                <div className={`tab-item ${currentTab === 'attachments' && 'active'}`} data-tab-id="attachments" onClick={() => setCurrentTab('attachments')}>
                                    Attachments

                                    <div className="tab-item__count">
                                        <div className="tab-item__count-inner">
                                            {task.attachments && task.attachments.length}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>

                    <div className="task__content-wrapper">
                        <div className={`tab-item__content ${currentTab === 'content' && 'active'}`} data-tab-element="content">
                            <div className="task__content">
                                {parse(task.content)}
                            </div>
                        </div>

                        <div className={`tab-item__content ${currentTab === 'attachments' && 'active'}`} data-tab-element="attachments">
                            {
                                task.attachments && task.attachments.length > 0
                                    ? <AttachmentList attachments={task.attachments} />
                                    : <div>Empty</div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}