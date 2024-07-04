import React, { useState } from 'react';
import { TaskList } from './TaskList';
import { TaskForm } from './TaskForm';
import { CategoryFilter } from './CategoryFilter';
import { useTasks } from './TaskContext';
import './Home.css';

export const Home = () => {
    const { tasks, addTask, toggleComplete, deleteTask } = useTasks();
    const [selectedCategory, setSelectedCategory] = useState('');
    const categories = [...new Set(tasks.map(task => task.category))];
    const filteredTasks = selectedCategory ? tasks.filter(task => task.category === selectedCategory) : tasks;

    return (
        <div className="home">
            <h1>Task Manager</h1>
            <TaskForm addTask={addTask} />
            <CategoryFilter categories={categories} onSelectCategory={setSelectedCategory} />
            <TaskList tasks={filteredTasks} onToggleComplete={toggleComplete} onDelete={deleteTask} />
        </div>
    );
};
