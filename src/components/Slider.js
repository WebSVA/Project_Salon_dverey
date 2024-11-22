import React, { useState, useEffect } from 'react';
import '../styles/slider.css'; 
import slider1 from "../assets/img/slider1.jpg";
import slider2 from "../assets/img/slider2.jpg";
import slider3 from "../assets/img/slider3.jpg";

const Slider = () => {
  const images = [
    slider1, 
    slider2,
    slider3
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Функция для переключения изображений
  const handleButtonClick = (index) => {
    setCurrentImageIndex(index);
  };

  // Используем useEffect для автоматического переключения изображений
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // переключение каждые 5 секунд

    // Очистка таймера при размонтировании компонента
    return () => clearInterval(interval);
  }, []); // Пустой массив зависимостей, чтобы таймер запускался один раз при монтировании компонента

  return (
    <div className="slider">
      {/* картинка */}
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="slider-image"
      />
      {/* кнопки */}
      <div className="slider-buttons">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`slider-button ${
              currentImageIndex === index ? 'active' : ''
            }`}
          >
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
