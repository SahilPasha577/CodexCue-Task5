import React from 'react';
import { Task } from './Task';
import './TaskList.css';

export const TaskList = ({ tasks, onToggleComplete, onDelete }) => {
    return (
        <div className="task-list">
            {tasks.map(task => (
                <Task key={task.id} task={task} onToggleComplete={onToggleComplete} onDelete={onDelete} />
            ))}
        </div>
    );
};
