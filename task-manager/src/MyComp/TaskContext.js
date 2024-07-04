import React, { createContext, useContext, useReducer } from 'react';

const TaskContext = createContext();

const taskReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.payload];
        case 'TOGGLE_COMPLETE':
            return state.map(task =>
                task.id === action.payload ? { ...task, completed: !task.completed } : task
            );
        case 'DELETE_TASK':
            return state.filter(task => task.id !== action.payload);
        default:
            return state;
    }
};

export const TaskProvider = ({ children }) => {
    const [tasks, dispatch] = useReducer(taskReducer, []);

    const addTask = (name, category, description) => {
        dispatch({
            type: 'ADD_TASK',
            payload: { id: Date.now(), name, category, description, completed: false },
        });
    };

    const toggleComplete = id => {
        dispatch({ type: 'TOGGLE_COMPLETE', payload: id });
    };

    const deleteTask = id => {
        dispatch({ type: 'DELETE_TASK', payload: id });
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, toggleComplete, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTasks = () => useContext(TaskContext);
