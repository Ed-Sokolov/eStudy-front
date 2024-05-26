import React from "react";
import "./task.scss";
import { type TTask as TTaskContent } from "../../type/Task";
import parse from "html-react-parser";

type TTask = {
    currentTab: 'content' | 'attachments'
    setCurrentTab: (value: 'content' | 'attachments') => void
    task: TTaskContent
}

export const Task: React.FC<TTask> = ({
    currentTab,
    setCurrentTab,
    task
}) => {
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
                        <h1 className="task__title">{task.name}</h1>

                        <p className="task__title-subtitle">{task.type.name}</p>
                    </div>
                </div>

                <div className="task__content-wrapper">
                    <nav className="task-nav">
                        <ul className="task-nav__list">
                            <li className="task-nav__list-item">
                                <div className={`tab-item ${currentTab === 'content' && 'active'}`} data-tab-id="content" onClick={() => setCurrentTab('content')}>Content</div>
                            </li>
                            <li className="task-nav__list-item">
                                <div className={`tab-item ${currentTab === 'attachments' && 'active'}`} data-tab-id="attachments" onClick={() => setCurrentTab('attachments')}>Attachments</div>
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
                            Soon...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}