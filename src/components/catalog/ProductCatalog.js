import React from 'react';
import '../../styles/catalog/productCatalog.css';

function ProductCatalog({ 
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
        <div className="product-card1" onClick={handleClick}>
            <div className='product-content1'>
                <div className='product-img-container1'>
                    {Array.isArray(firstColorImage) ? (
                        firstColorImage.map((imageSrc, index) => (
                            <img
                                key={index}
                                className='product-img-entry-doors1'
                                src={imageSrc}
                                alt={`${firstColorName}-${index}`}
                            />
                        ))
                    ) : (
                        <img
                            className='product-img1'
                            src={firstColorImage}
                            alt={firstColorName}
                        />
                    )}
                </div>
                <div className='text-container1'>
                    <h2 className='product-description1'>{type}</h2>
                    <h1 className='product-name1'>{name}</h1>
                </div>
            </div>
            <div className='underline1'></div>
        </div>
        </>
    );
}

export default ProductCatalog;
