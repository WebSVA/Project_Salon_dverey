function ProductCatalog({ product, onClick }) {
    const { id, name, type, color } = product;

    const handleClick = (colorName) => {
        if (onClick) {
            onClick({ id, colorName }); // Передаем id и цвет
        }
    };

    return (
        <div className="product-card-container">
            {Object.entries(color).map(([colorName, colorImages]) => (
                <div 
                    key={`${id}-${colorName}`} 
                    className="product-card" 
                    onClick={() => handleClick(colorName)}
                >
                    <div className='product-content'>
                        <div className='product-img-container'>
                            <img
                                className='product-img'
                                src={Array.isArray(colorImages) ? colorImages[0] : colorImages}
                                alt={colorName}
                            />
                        </div>
                        <div className='text-container'>
                            <h2 className='product-description'>{type}</h2>
                            <h1 className='product-name'>{name}</h1>
                            
                        </div>
                    </div>
                    <div className='underline'></div>
                </div>
            ))}
        </div>
    );
}
