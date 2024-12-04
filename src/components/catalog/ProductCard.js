import React from 'react';
import '../../styles/catalog/productCard.css';

function ProductCard({ 
    product: { 
        id, 
        name, 
        type,  
        color 
    }, 
    onClick 
}) 
{
    const [firstColorName, firstColorImage] = Object.entries(color)[0];
    const handleClick = () => {
        if (onClick) {
            onClick(id); // Передаем id товара при клике
        }
    };

    return (  
        <>     
        <div className="product-card" onClick={handleClick}>
            <div className='product-content'>
                <div className='product-img-container'>
                    <img className='product-img' src={firstColorImage} alt={firstColorName} />
                </div>
                <div className='text-container'>
                    <h2 className='product-description'>{type}</h2>
                    <h1 className='product-name'>{name}</h1>
                </div>
            </div>
            <div className='underline'>
            </div>
        </div>
        </>
    );
}

export default ProductCard;