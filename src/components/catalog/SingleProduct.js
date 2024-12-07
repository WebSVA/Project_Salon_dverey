import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from '../Button';
import data from "../../data/data.json";
import '../../styles/catalog/singleProduct.css';
import measureIcon from '../../assets/measure.png';
import degreeIcon from '../../assets/degree.png';
import toolsIcon from '../../assets/tools.png';
import truckIcon from '../../assets/delivery-truck.png';

function SingleProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedColor, setSelectedColor] = useState('');

    useEffect(() => {
        const foundProduct = data.find(item => item.id === parseInt(id));
        if (foundProduct) {
            setProduct(foundProduct);
            const firstImage = Object.values(foundProduct.color)[0]; // Первая картинка из цветов
            setSelectedImage(Array.isArray(firstImage) ? firstImage[0] : firstImage); // Если массив, берем первый элемент

            const defaultColor = Object.keys(foundProduct.color)[0]; // Берем первый цвет
            setSelectedColor(defaultColor || '');
        }
    }, [id]);

    const handleImageClick = (imagePath) => {
        setSelectedImage(imagePath);

         // Устанавливаем выбранный цвет на основе картинки
         const color = Object.keys(product.color).find(colorName => 
            Array.isArray(product.color[colorName]) 
                ? product.color[colorName].includes(imagePath) 
                : product.color[colorName] === imagePath
        );
        setSelectedColor(color || '');
    };

    return (
        <>
            {product ? (
                <div className="single-container-info">
                    <div className="product-information-container">
                        <div className="product-img-container">
                            {/* Большая картинка */}
                            <div className="select-img-product-container">
                                <img 
                                    className="select-img-product" 
                                    src={selectedImage} 
                                    alt="Selected product" 
                                />
                            </div>
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
                                        <div className="circle-container" key={colorName} onClick={() => handleImageClick(imagePath)}>
                                            <img
                                                src={imagePath}
                                                alt={colorName}
                                                className="small-img"
                                            />
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                        <div className="single-product-info-container">
                            <h1>{product.name}</h1>
                                {product.type && <div className="info-item"><p className="info-description"><span>Тип:</span> {product.type}</p></div>}
                                {selectedColor && <div className="info-item"><p className="info-description"><span>Цвет:</span> {selectedColor}</p></div>} {/* Строка для выбранного цвета */}
                                {product.material && <div className="info-item"><p className="info-description"><span>Материал:</span> {product.material}</p></div>}
                                {product.glass && <div className="info-item"><p className="info-description"><span>Стекло:</span> {product.glass}</p></div>}
                                {product.fill && <div className="info-item"><p className="info-description"><span>Наполнитель:</span> {product.fill}</p></div>}
                                {product.thickness && <div className="info-item"><p className="info-description"><span>Толщина:</span> {product.thickness}</p></div>}
                                {product.fabricator && <div className="info-item"><p className="info-description"><span>Производитель:</span> {product.fabricator}</p></div>}
                                {product.eye && <div className="info-item"><p className="info-description"><span>Глазок:</span> {product.eye}</p></div>}
                                {product.high_lock && <div className="info-item"><p className="info-description"><span>Верхний замок:</span> {product.high_lock}</p></div>}
                                {product.low_lock && <div className="info-item"><p className="info-description"><span>Нижний замок:</span> {product.low_lock}</p></div>}

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
                            <div className="text-description-to-button">
                                <p>Наличие товара в магазине или любые другие вопросы уточняйте по номеру телефона или оставьте запрос  </p>
                            </div>
                            <div className="button-container">
                                <Button className="link-to-form-detail-button" text="Связаться"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>Продукт не найден</div>
            )}

            <div className="services-container">
                <div className="services-info-container">
                    <div className="single-services-info">
                        <div className="services-img-cotainer">
                            <img  src={measureIcon} className="services-img" alt="Замеры"></img>
                        </div>
                        <div className="services-text-container">
                            <h3>Замеры:</h3>
                            <p>Замер бесплатный в пределах МКАД, при заказе от 3-х дверей с фурнитурой. Залог за услугу - 1500 руб.
                                Услуга выезд менеджера замерщика с образцами покрытия стоит 2000 руб. по Москве в пределах МКАД.
                                Доплата за выезд за МКАД + 50 руб./км.
                                Замерщик приезжает в течении 1-2 дней после оформления заявки на замер.</p>
                        </div>
                    </div>
                    <div className="single-services-info">
                        <div className="services-img-cotainer">
                            <img  src={measureIcon} className="services-img" alt="Замеры"></img>
                        </div>
                        <div className="services-text-container">
                            <h3>Замеры:</h3>
                            <p>Замер бесплатный в пределах МКАД, при заказе от 3-х дверей с фурнитурой. Залог за услугу - 1500 руб.
                                Услуга выезд менеджера замерщика с образцами покрытия стоит 2000 руб. по Москве в пределах МКАД.
                                Доплата за выезд за МКАД + 50 руб./км.
                                Замерщик приезжает в течении 1-2 дней после оформления заявки на замер.</p>
                        </div>
                    </div>
                    <div className="single-services-info">
                        <div className="services-img-cotainer">
                            <img  src={measureIcon} className="services-img" alt="Замеры"></img>
                        </div>
                        <div className="services-text-container">
                            <h3>Замеры:</h3>
                            <p>Замер бесплатный в пределах МКАД, при заказе от 3-х дверей с фурнитурой. Залог за услугу - 1500 руб.
                                Услуга выезд менеджера замерщика с образцами покрытия стоит 2000 руб. по Москве в пределах МКАД.
                                Доплата за выезд за МКАД + 50 руб./км.
                                Замерщик приезжает в течении 1-2 дней после оформления заявки на замер.</p>
                        </div>
                    </div>
                    <div className="single-services-info">
                        <div className="services-img-cotainer">
                            <img  src={measureIcon} className="services-img" alt="Замеры"></img>
                        </div>
                        <div className="services-text-container">
                            <h3>Замеры:</h3>
                            <p>Замер бесплатный в пределах МКАД, при заказе от 3-х дверей с фурнитурой. Залог за услугу - 1500 руб.
                                Услуга выезд менеджера замерщика с образцами покрытия стоит 2000 руб. по Москве в пределах МКАД.
                                Доплата за выезд за МКАД + 50 руб./км.
                                Замерщик приезжает в течении 1-2 дней после оформления заявки на замер.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleProduct;
