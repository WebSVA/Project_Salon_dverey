import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../data/data.json";

function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const foundProduct = data.find(item => item.id === parseInt(id));
        setProduct(foundProduct);
    }, [id]);

    return (
        <>
            {product ? (
                <div>
                    <h1>{product.name}</h1>
                    <p>Тип: {product.type}</p>
                    <p>Материал: {product.material}</p>
                    <p>Толщина: {product.thickness} мм</p>
                    <p>Производитель: {product.fabricator}</p>
                    <p>Стекло: {product.glass}</p>

                    {/* Отображение всех цветов с изображениями */}
                    <div>
                        <h3>Цвета:</h3>
                        <ul>
                            {Object.entries(product.color).map(([colorName, imagePath]) => (
                                <li key={colorName}>
                                    <p>{colorName}</p>
                                    <img src={imagePath} alt={colorName} width={100} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Отображение доступных размеров */}
                    <div>
                        <h3>Доступные размеры:</h3>
                        <ul>
                            {product.size.map((size, index) => (
                                <li key={index}>{size}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <div>Продукт не найден</div>
            )}
        </>
    );
}

export default ProductPage;
