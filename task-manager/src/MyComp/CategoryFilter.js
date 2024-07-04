import React from 'react';
import './CategoryFilter.css';

export const CategoryFilter = ({ categories, onSelectCategory }) => {
    return (
        <div className="category-filter">
            <button onClick={() => onSelectCategory('')}>All</button>
            {categories.map(category => (
                <button key={category} onClick={() => onSelectCategory(category)}>
                    {category}
                </button>
            ))}
        </div>
    );
};
