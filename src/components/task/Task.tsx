import React from "react";
import "./task.scss";

export const Task: React.FC<{
    currentTab: 'content' | 'attachments'
    setCurrentTab: (value: 'content' | 'attachments') => void
}> = ({
    currentTab,
    setCurrentTab
}) => {
    return (
        <div className="container">
            <div className="task">
                <div className="task__header">
                    <div className="task__room-name">Computer Architecture</div>

                    <div className="task__header-info">
                        <div className="task__header-author">Sokolov E.O.</div>

                        <div className="task__header-date">/-- 25.05.2024 --/</div>
                    </div>

                    <div className="task__title-wrapper">
                        <h1 className="task__title">Lecture №12</h1>

                        <p className="task__title-subtitle">Lecture</p>
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

                    <div className="task__content">
                        <div className={`tab-item__content ${currentTab === 'content' && 'active'}`} data-tab-element="content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur corporis cumque
                                dignissimos doloribus ducimus exercitationem impedit iusto mollitia nesciunt numquam omnis,
                                quia ratione rerum veritatis voluptates! Animi aperiam asperiores debitis deleniti, deserunt
                                dignissimos distinctio doloremque eligendi exercitationem facere fuga in laudantium libero
                                maxime, officia quae quo, quod vel veniam voluptatum!
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur corporis cumque
                                dignissimos doloribus ducimus exercitationem impedit iusto mollitia nesciunt numquam omnis,
                                quia ratione rerum veritatis voluptates! Animi aperiam asperiores debitis deleniti, deserunt
                                dignissimos distinctio doloremque eligendi exercitationem facere fuga in laudantium libero
                                maxime, officia quae quo, quod vel veniam voluptatum!
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur corporis cumque
                                dignissimos doloribus ducimus exercitationem impedit iusto mollitia nesciunt numquam omnis,
                                quia ratione rerum veritatis voluptates! Animi aperiam asperiores debitis deleniti, deserunt
                                dignissimos distinctio doloremque eligendi exercitationem facere fuga in laudantium libero
                                maxime, officia quae quo, quod vel veniam voluptatum!
                            </p>
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