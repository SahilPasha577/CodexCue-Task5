import React, { useState } from 'react';
import './TaskForm.css';

export const TaskForm = ({ addTask }) => {
    const [taskName, setTaskName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(taskName, category, description);
        setTaskName('');
        setCategory('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Task name"
            />
            <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Category"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
            ></textarea>
            <button type="submit">Add Task</button>
        </form>
    );
};
