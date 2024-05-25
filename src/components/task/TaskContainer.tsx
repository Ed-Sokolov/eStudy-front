import React, {useState} from "react";
import { Task } from "./Task";

export const TaskContainer: React.FC = () => {
    const [currentTab, setCurrentTab] = useState<'content' | 'attachments'>('content')

    return <Task currentTab={currentTab} setCurrentTab={setCurrentTab}/>
}