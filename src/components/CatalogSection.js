import React, { useState, useEffect } from 'react';
import {Link } from 'react-router-dom';
import Button from './Button';
import ProductCard from '../components/catalog/ProductCard';
import data from '../data/data.json';
import '../styles/CatalogSection.css';

function CatalogSection() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(data);
    }, []);

    const currentProducts = [
        ...products.slice(0, 5),       // Первые 5 элементов
        ...products.slice(39, 44),     // 5 элементов с 39-го индекса
        ...products.slice(177, 182),    // 5 элементов с 177-го индекса
        ...products.slice(200, 204), 
        ...products.slice(192, 195)   // 5 элементов с 198-го индекса
    ];
    const productIds = [49, 72, 98, 179, 182, 120, 48, 77, 93, 56, 123, 103, 110, 172, 171, 119, 126, 50, 46, 85]; // массив с ID
    const currentProductsOut = products.filter(product => productIds.includes(product.id));

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
                                .filter(product => product.type === "Входная дверь") // Фильтруем входные двери
                                .map(product => (
                                    <Link key={product.id} to={`/catalog/${product.id}`} className="product-link">
                                        <ProductCard 
                                            product={product} 
                                        />
                                    </Link>
                                ))}
                        </div>
                    </div>
                    <div className='link-to-catalog'>
                        <p>Перейти к полному каталогу</p>
                        <Link to ='/catalog/entry-doors'><Button text="Каталог" className="call-to-catalog-link" /></Link>
                    </div>
                    <div className='info-with-lines'>
                        <div className='first-line'></div>
                        <h2 className='formal-title'>Межкомнатные двери</h2>
                        <div className='second-line'></div>
                    </div>
                    <div className='catalog'>
                        <div className="product-list">
                            {currentProducts.map(product => (
                                <Link key={product.id} to={`/catalog/${product.id}`} className="product-link">
                                    <ProductCard 
                                        product={product} 
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='link-to-catalog'>
                        <p>Перейти к полному каталогу</p>
                        <Link to ='/catalog/interior-doors'><Button text="Каталог"  className="call-to-catalog-link" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CatalogSection;
