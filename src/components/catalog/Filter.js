import React, { useEffect, useState } from 'react';
import '../../styles/catalog/filter.css';

const Filter = ({ filters, onFilterChange }) => {
    const [selectedFilters, setSelectedFilters] = useState({}); // Хранение выбранных фильтров
    const [openCategory, setOpenCategory] = useState(null); // Для отслеживания открытого списка

    useEffect(() => {
        // Проверяем, была ли страница перезагружена
        const isPageReloaded = sessionStorage.getItem('pageReloaded');

        // Если страница не перезагружена, загружаем сохранённые фильтры
        if (!isPageReloaded) {
            const savedFilters = sessionStorage.getItem('selectedFilters');
            if (savedFilters) {
                setSelectedFilters(JSON.parse(savedFilters)); // Восстанавливаем сохранённые фильтры
            }
        } else {
            // Если страница перезагружена, сбрасываем отмеченные чекбоксы
            setSelectedFilters({});
            sessionStorage.removeItem('selectedFilters'); // Удаляем сохранённые фильтры
        }

        // Устанавливаем флаг о том, что страница загружена
        sessionStorage.setItem('pageReloaded', 'true');

        // Удаляем флаг при закрытии вкладки
        return () => {
            sessionStorage.removeItem('pageReloaded');
        };
    }, []);

    const handleCheckboxChange = (category, value) => {
        const updatedFilters = {
            ...selectedFilters,
            [category]: selectedFilters[category]?.includes(value)
                ? selectedFilters[category].filter(item => item !== value) // Убираем фильтр
                : [...(selectedFilters[category] || []), value] // Добавляем фильтр
        };

        setSelectedFilters(updatedFilters);
        onFilterChange(updatedFilters);

        // Сохраняем текущее состояние чекбоксов в sessionStorage
        sessionStorage.setItem('selectedFilters', JSON.stringify(updatedFilters));
    };

    const toggleCategory = (category) => {
        setOpenCategory(openCategory === category ? null : category); // Переключаем состояние
    };

    const getFilterCount = (category) => {
        return selectedFilters[category]?.length || 0; // Возвращает количество выбранных фильтров
    };

    return (
        <div className="filter-container">
            {filters.map(({ category, options }) => (
                <div
                    className={`filter-group ${openCategory === category ? 'open' : ''}`}
                    key={category}>
                    <div
                        className="filter-summary"
                        onClick={() => toggleCategory(category)}>
                        <div className='category-counter'>
                            <p className="filter-counter">
                                {getFilterCount(category) > 0 ? getFilterCount(category) : ''}
                            </p>
                            {category}
                        </div>
                        <p className={`filter-arrow ${openCategory === category ? 'open' : ''}`}></p>
                    </div>
                    <div className="hiden-menu">
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
            ))}
        </div>
    );
};

export default Filter;