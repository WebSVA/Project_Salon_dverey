import React, { useEffect, useState } from 'react';
import Breadcrumbs from "../components/Breadcrumbs";
import ProductCard from '../components/catalog/ProductCard';
import data from '../data/data.json';
import '../styles/catalog/catalogPage.css';

function CatalogPage() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4; // сколько будет на одной странице

    useEffect(() => {
        setProducts(data);
    }, []);

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;

    const currentProducts = products.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(products.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 400, behavior: 'smooth' }); // Прокрутка вверх при смене страницы
    };

    return (
        <div>
            <Breadcrumbs title="Каталог" />
            <div className='catalog-container-main'>
                <div className='catalog-container'>
                    <div className='filter-section'></div>
                    <div className="product-list">
                        {currentProducts.map(product => (
                            <ProductCard 
                                key={product.id} 
                                product={product} 
                                onClick={(id) => console.log(`Clicked on product with ID: ${id}`)} 
                            />
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
        </div>
    );
}

export default CatalogPage;