import React from 'react';
import './Task.css';

export const Task = ({ task, onToggleComplete, onDelete }) => {
    return (
        <div className="task">
            <div>
                <input type="checkbox" checked={task.completed} onChange={() => onToggleComplete(task.id)} />
                <span className={task.completed ? 'completed' : ''}>{task.name}</span>
            </div>
            <p>{task.description}</p>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
    );
};
