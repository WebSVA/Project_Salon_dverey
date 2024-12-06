import React, { useEffect, useState } from 'react';

import data from '../../data/data.json';
import ProductCard from './ProductCard';
import '../../styles/catalog/catalogContainer.css';

function CatalogContainer() {
    const [products, setProducts] = useState([]); // Все продукты
    const [searchQuery, setSearchQuery] = useState(''); // Строка поиска
    const [filteredProducts, setFilteredProducts] = useState([]); // Отфильтрованные продукты
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 50; // Сколько будет на одной странице

    useEffect(() => {
        setProducts(data);
        setFilteredProducts(data); // Изначально показываем все продукты
    }, []);

    // Обновление фильтрации при изменении строки поиска
    useEffect(() => {
        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredProducts(filtered);
        setCurrentPage(1); // Сбрасываем текущую страницу на первую при поиске
    }, [searchQuery, products]);

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;

    const currentProducts = filteredProducts.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 400, behavior: 'smooth' }); // Прокрутка вверх при смене страницы
    };

    return (
        <div className='catalog-container-main'>
           
            <div className='catalog-container'>
                <div className='filter-section'>
                <div className='search-bar'>
                <input
                    type='text'
                    placeholder='Поиск...'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className='search-input'
                />
            </div>
                </div>
                <div className="product-list">
                    {currentProducts.map(product => (
                        <a key={product.id} href={`/catalog/${product.id}`}><ProductCard 
                            key={product.id} 
                            product={product} 
                            onClick={(id) => console.log(`Clicked on product with ID: ${id}`)} 
                        /></a>
                    ))}
                </div>
            </div>
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button 
                        key={index + 1} 
                        onClick={() => handlePageChange(index + 1)} 
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CatalogContainer;