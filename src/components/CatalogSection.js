import React, { useState, useEffect } from 'react';

import Button from './Button';
import ProductCard from '../components/catalog/ProductCard';
import data from '../data/data.json';
import '../styles/CatalogSection.css';

function CatalogSection() {
    const [products, setProducts] = useState([]);
   

    useEffect(() => {
        setProducts(data);
    }, []);

    const currentProducts = products.slice(0, 5);
    const currentProductsOut = products.slice(168, 175);

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
                            {currentProductsOut
                                .filter(product => product.type == "Входная дверь") // Фильтруем входные двери
                                .map(product => (
                                    <a key={product.id} href={`/catalog/${product.id}`}>
                                        <ProductCard 
                                            product={product} 
                                            onClick={(id) => console.log(`Clicked on product with ID: ${id}`)} 
                                        />
                                    </a>
                                ))}
                        </div>
                    </div>
                    <div className='link-to-catalog'>
                        <p>Перейти к полному каталогу</p>
                        <Button text="Каталог" href='/catalog'  className="call-to-catalog-link"/>
                    </div>
                    <div className='info-with-lines'>
                        <div className='first-line'></div>
                        <h2 className='formal-title'>Межкомнатные двери</h2>
                        <div className='second-line'></div>
                    </div>
                    <div className='catalog'>
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
                    <div className='link-to-catalog'>
                        <p>Перейти к полному каталогу</p>
                        <Button text="Каталог" href='/catalog'  className="call-to-catalog-link"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CatalogSection;