import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../../data/data.json";
import '../../styles/catalog/singleProduct.css';

function SingleProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const foundProduct = data.find(item => item.id === parseInt(id));
        if (foundProduct) {
            setProduct(foundProduct);
            const firstImage = Object.values(foundProduct.color)[0]; // Первая картинка из цветов
            setSelectedImage(Array.isArray(firstImage) ? firstImage[0] : firstImage); // Если массив, берем первый элемент
        }
    }, [id]);

    const handleImageClick = (imagePath) => {
        setSelectedImage(imagePath);
    };

    return (
        <>
            {product ? (
                <div className="single-container-info">
                    <div className="product-information-container">
                        <div className="product-img-container">
                            {/* Большая картинка */}
                            <img 
                                className="select-img-product" 
                                src={selectedImage} 
                                alt="Selected product" 
                            />
                            {/* Маленькие картинки */}
                            <div className="other-img-container">
                                {Object.entries(product.color).map(([colorName, imagePath]) =>
                                    Array.isArray(imagePath) ? (
                                        // Если массив, отобразить до двух картинок
                                        imagePath.slice(0, 2).map((img, index) => (
                                            <img
                                                key={`${colorName}-${index}`}
                                                src={img}
                                                alt={`${colorName}-${index}`}
                                                className="small-img"
                                                onClick={() => handleImageClick(img)}
                                            />
                                        ))
                                    ) : (
                                        // Если одиночная картинка
                                        <img
                                            key={colorName}
                                            src={imagePath}
                                            alt={colorName}
                                            className="small-img"
                                            onClick={() => handleImageClick(imagePath)}
                                        />
                                    )
                                )}
                            </div>
                        </div>
                        <div className="single-product-info-container">
                            <h1>{product.name}</h1>
                            {product.name && <p className="info-description"><span>Название:</span> {product.name}</p>}
                            {product.type && <p className="info-description"><span>Тип:</span> {product.type}</p>}
                            {product.material && <p className="info-description"><span>Материал:</span> {product.material}</p>}
                            {product.glass && <p className="info-description"><span>Стекло:</span> {product.glass}</p>}
                            {product.fill && <p className="info-description"><span>Наполнитель:</span> {product.fill}</p>}
                            {product.thickness && <p className="info-description"><span>Толщина:</span> {product.thickness}</p>}
                            {product.fabricator && <p className="info-description"><span>Производитель:</span> {product.fabricator}</p>}
                            {product.eye && <p className="info-description"><span>Глазок:</span> {product.eye}</p>}
                            {product.high_lock && <p className="info-description"><span>Верхний замок:</span> {product.high_lock}</p>}
                            {product.low_lock && <p className="info-description"><span>Нижний замок:</span> {product.low_lock}</p>}
                            <div className="size-info-container">
                                <h3>Доступные размеры:</h3>
                                <div className="size-info">
                                    <ul>
                                        {product.size.map((size, index) => (
                                            <li key={index}>{size}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>Продукт не найден</div>
            )}
        </>
    );
}

export default SingleProduct;
