import React from 'react';
import { useParams } from 'react-router-dom';
import { TaskList } from './TaskList';
import { useTasks } from './TaskContext';
import './CategoryPage.css';

export const CategoryPage = () => {
    const { category } = useParams();
    const { tasks, toggleComplete, deleteTask } = useTasks();
    const filteredTasks = tasks.filter(task => task.category === category);

    return (
        <div className="category-page">
            <h1>Category: {category}</h1>
            <TaskList tasks={filteredTasks} onToggleComplete={toggleComplete} onDelete={deleteTask} />
        </div>
    );
};
