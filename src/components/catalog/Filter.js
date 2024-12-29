import React, { useState } from 'react';
import '../../styles/catalog/filter.css';

const Filter = ({ filters, onFilterChange }) => {
    const [selectedFilters, setSelectedFilters] = useState({});

    const handleCheckboxChange = (category, value) => {
        const updatedFilters = {
            ...selectedFilters,
            [category]: selectedFilters[category]?.includes(value)
                ? selectedFilters[category].filter(item => item !== value) // Убираем фильтр
                : [...(selectedFilters[category] || []), value] // Добавляем фильтр
        };

        setSelectedFilters(updatedFilters);
        onFilterChange(updatedFilters);
    };

    return (
        <div className="filter-container">
            {filters.map(({ category, options }) => (
               
                <div className="filter-group" key={category}>
                    
                    <div className='filter-summary'>{category}
                    <span className='filter-arrow'></span>
                
                    <div className='hiden-menu'>
                    <ul>
                        {options.map(option => (
                            <li key={option}>
                                <label>
                                    <input
                                        type="checkbox"
                                        value={option}
                                        checked={selectedFilters[category]?.includes(option) || false}
                                        onChange={() => handleCheckboxChange(category, option)}
                                    />
                                    {option}
                                </label>
                            </li>
                        ))}
                    </ul>
                    </div>
                    </div>
                </div>
               
            ))}
        </div>
    );
};

export default Filter;
