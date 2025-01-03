import React, { useState } from 'react'; 
import '../../styles/catalog/productCatalog.css';

function ProductCatalog({ 
    product: { 
        id, 
        name, 
        type,  
        colorName, 
        colorImage,  // Получаем изображение и название цвета
    }, 
    onClick 
}) {
    const [loading, setLoading] = useState(true); // Состояние для отслеживания загрузки изображения

    const handleClick = () => {
        if (onClick) {
            onClick(id); // Передаем id товара при клике
        }
    };

    const handleImageLoad = () => {
        setLoading(false); // Устанавливаем, что изображение загрузилось
    };

    return (  
        <>     
        <div className="product-card1" onClick={handleClick}>
            <div className='product-content1'>
                <div className='product-img-container1'>
                    {/* Показываем индикатор загрузки, пока изображение не загрузится */}
                    {loading && <div className="loading-spinner">Загрузка...</div>}
                    {/* Если colorImage - это массив, то рендерим все картинки */}
                    {Array.isArray(colorImage) ? (
                        colorImage.map((imageSrc, index) => (
                            <img
                                key={index}
                                className={`product-img-entry-doors1 ${loading ? 'hidden' : ''}`}
                                src={imageSrc}
                                alt={`${colorName}-${index}`}
                                onLoad={handleImageLoad}
                            />
                        ))
                    ) : (
                        <img
                            className={`product-img1 ${loading ? 'hidden' : ''}`}
                            src={colorImage} // Используем переданное изображение
                            alt={colorName}
                            onLoad={handleImageLoad}
                        />
                    )}
                </div>
                <div className='text-container1'>
                    <h2 className='product-description1'>{type}</h2>
                    <h1 className='product-name1'>{name}</h1>
                    <h2 className='product-color'>{colorName}</h2>
                </div>
            </div>
            <div className='underline1'></div>
        </div>
        </>
    );
}

export default ProductCatalog;
