import React, { useState, useEffect } from 'react';

import ProductCard from '../components/catalog/ProductCard';
import data from '../data/data.json';
import '../styles/upCatalogSection.css';

function UpCatalogSection() {
    const [products, setProducts] = useState([]);
   

    useEffect(() => {
        setProducts(data);
    }, []);

    const currentProducts = products.slice(0, 5);

    return (
        <div>
            <div className='home-page-catalog-section'>
                <div className='home-page-catalog-container'>
                    <div>
                        <h1 className='title-section'>Наши предложения</h1>
                    </div>
                    <div className='info-with-lines'>
                        <div className='first-line'></div>
                        <h2 className='formal-title'>Входные двери</h2>
                        <div className='second-line'></div>
                    </div>
                    <div className='catalog'>
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
                    <div className='link-to-catalog'>
                        <p>Перейти к полному каталогу</p>
                        <button>

                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpCatalogSection;