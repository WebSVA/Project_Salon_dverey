import { useParams, useLocation,  useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from '../Button';
import data from "../../data/data.json";
import '../../styles/catalog/singleProduct.css';
import measureIcon from '../../assets/measure.png';
import degreeIcon from '../../assets/degree.png';
import truckIcon from '../../assets/delivery-truck.png';
import toolsIcon from '../../assets/tools.png';
import viberIcon from '../../assets/viber.png';
import tgIcon from '../../assets/telegram.png';
import Email from "../../Email";

function SingleProduct() {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const initialColor = searchParams.get('color');
    const [product, setProduct] = useState(null);
    const [selectedImages, setSelectedImages] = useState([]);
    const [selectedColor, setSelectedColor] = useState('');
    const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    useEffect(() => {
        const foundProduct = data.find(item => item.id === parseInt(id));
        if (foundProduct) {
            setProduct(foundProduct);
            const defaultColor = initialColor || Object.keys(foundProduct.color)[0]; // Используйте цвет из URL или первый доступный
            setSelectedColor(defaultColor);
    
            const initialImages = foundProduct.color[defaultColor];
            setSelectedImages(Array.isArray(initialImages) ? initialImages.slice(0, 2) : [initialImages]);
        }
    }, [id, initialColor]);

    const openEmailModal = () => {
        setIsEmailModalOpen(true);
    };

    const closeEmailModal = () => {
        setIsEmailModalOpen(false);
    };

    const openImageModal = (image) => {
        setCurrentImage(image);
        setIsImageModalOpen(true);
    };

    const closeImageModal = () => {
        setIsImageModalOpen(false);
        setCurrentImage('');
    };

    useEffect(() => {
        document.body.style.overflow = isEmailModalOpen || isImageModalOpen ? 'hidden' : 'auto';
    }, [isEmailModalOpen, isImageModalOpen]);

    const handleImageClick = (imagePaths) => {
        setSelectedImages(imagePaths);
        const color = Object.keys(product.color).find(colorName =>
            Array.isArray(product.color[colorName]) 
                ? product.color[colorName].some(img => imagePaths.includes(img)) 
                : product.color[colorName] === imagePaths[0]
        );
        setSelectedColor(color || '');
        if (color) {
            navigate(`?color=${color}`, { replace: true }); // Обновляем URL без добавления в историю
        }
    };

    return (
        <>
            {product ? (
                <div className="single-container-info">
                    <div className="product-information-container">
                        <div className="product-img-container">
                            <div className="single-product-info-name-adapt">
                                <h1>{product.name}</h1>
                            </div>
                            <div className="select-img-product-container">
                                {selectedImages.length > 1 ? (
                                    <div className="combined-img-container">
                                        {selectedImages.map((img, index) => (
                                            <img 
                                                key={index} 
                                                className="select-img-product" 
                                                src={img} 
                                                alt={`Selected product ${index}`} 
                                                onClick={() => openImageModal(img)} // Открытие модального окна по клику
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    <img 
                                        className="select-img-product" 
                                        src={selectedImages[0]} 
                                        alt="Selected product" 
                                        onClick={() => openImageModal(selectedImages[0])} // Открытие модального окна по клику
                                    />
                                )}
                            </div>
                            <div className="other-img-container">
                                {Object.entries(product.color).map(([colorName, imagePath]) =>
                                    Array.isArray(imagePath) ? (
                                        <div className="circle-container" key={colorName} onClick={() => handleImageClick(imagePath.slice(0, 2))}>
                                            <img
                                                src={imagePath[0]}
                                                alt={colorName}
                                                title={colorName}
                                                className="small-img"
                                                height={"200px"}
                                                 // Открытие модального окна по клику
                                            />
                                        </div>
                                    ) : (
                                        <div className="circle-container" key={colorName} onClick={() => handleImageClick([imagePath])}>
                                            <img
                                                src={imagePath}
                                                alt={colorName}
                                                title={colorName}
                                                className="small-img"
                                                // Открытие модального окна по клику
                                            />
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                        <div className="single-product-info-container">
                            <h1>{product.name}</h1>
                            {product.type && <div className="info-item"><p className="info-description"><span>Тип:</span> {product.type}</p></div>}
                            {selectedColor && <div className="info-item"><p className="info-description"><span>Цвет:</span> {selectedColor}</p></div>}
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
                                <p>Наличие товара в магазине или любые другие вопросы уточняйте по номеру телефона или оставьте заявку</p>
                            </div>
                            <div className="button-container">
                                <div className="contact-viber-tg">
                                    <a href="viber://chat?number=%2B375299289289&text=Здравствуйте,%20у%20меня%20вопрос%20по%20вашим%20товарам." target="_blank" rel="noopener noreferrer">
                                        <img src={viberIcon} className="location-icon" alt="Viber" />
                                        <p><span>Viber:</span>&nbsp;&nbsp;+375-(29)-928-92-89</p>
                                    </a>
                                    <a href="https://t.me/yaroshevichandrey?text=Здравствуйте,%20у%20меня%20вопрос%20по%20поводу%20ваших%20товаров." target="_blank" rel="noopener noreferrer">
                                        <img src={tgIcon} className="location-icon" alt="Telegram" />
                                        <p><span>Telegram:</span>&nbsp;&nbsp;+375-(29)-928-92-89</p>
                                    </a>
                                </div>
                                <div className="single-button">
                                    <Button className="link-to-form-detail-button" onClick={openEmailModal} text="Оставить заявку"></Button>
                                </div>
                            </div>
                            {/* Модальное окно для заявки */}
                            {isEmailModalOpen && (
                                <div className="modal-overlay">
                                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                        <Email modalClose={closeEmailModal} />
                                        <button onClick={closeEmailModal} className="close-modal-btn">x</button>
                                        <div className="orang-strip"></div>
                                    </div>
                                </div>
                            )}
                            {/* Модальное окно для изображения */}
                            {isImageModalOpen && currentImage && (
                                <div className="modal-overlay" onClick={closeImageModal}>
                                    <div className="modal-image-content" onClick={(e) => e.stopPropagation()}>
                                        <img src={currentImage} alt="Current" className="modal-image" style={{ width: '260px' }} />
                                        <button onClick={closeImageModal} className="close-modal-btn">x</button>
                                    </div>
                                </div>
                            )}
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
                            <img src={measureIcon} className="services-img" alt="Замеры" />
                        </div>
                        <div className="services-text-container">
                            <h3>Замеры:</h3>
                            <p>Мы предоставляем услугу <span>бесплатных</span> замеров дверных проёмов с выездом наших опытных специалистов.</p>
                        </div>
                    </div>
                    <div className="single-services-info">
                        <div className="services-img-cotainer">
                            <img src={truckIcon} className="services-img" alt="Доставка" />
                        </div>
                        <div className="services-text-container">
                            <h3>Доставка:</h3>
                            <p>Мы осуществляем <span>бесплатную</span> доставку в пределах города. При выезде за город доставка <span>от 15 рублей</span>.</p>
                        </div>
                    </div>
                    <div className="single-services-info">
                        <div className="services-img-cotainer">
                            <img src={degreeIcon} className="services-img" alt="Гарантия" />
                        </div>
                        <div className="services-text-container">
                            <h3>Гарантия:</h3>
                            <p>Мы предоставляем гарантию на все товары в течение <span>12 месяцев</span>.</p>
                        </div>
                    </div>
                    <div className="single-services-info">
                        <div className="services-img-cotainer">
                            <img src={toolsIcon} className="services-img" alt="Монтаж" />
                        </div>
                        <div className="services-text-container">
                            <h3>Монтаж:</h3>
                            <p>Наши специалисты осуществляют монтаж входных и межкомнатных дверей, арок и порталов, раздвижных систем, а также различных видов фурнитуры.</p>
                        </div>
                    </div>
                    <div className="single-services-info">
                        <div className="services-text-container">
                            <h3>Информация о товаре предоставлена для ознакомления и не является публичной офертой.</h3>
                            <p>Производители оставляют за собой право изменять внешний вид, характеристики и комплектацию товара, предварительно не уведомляя продавцов и потребителей. Просим вас отнестись с пониманием к данному факту и заранее приносим извинения за возможные неточности в описании и фотографиях товара. Будем благодарны вам за сообщение об ошибках — это поможет сделать наш каталог еще точнее!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleProduct;