import React from 'react';
import '../styles/parallax.css';
import Button from './Button';
import Email from '../Email';
import { useState, useEffect } from 'react';

const Parallax = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalOpen = () => {
    setIsModalOpen(true);
  };

  const modalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'auto'; 
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (  
    <div className="parallax">
      <div className="contact-section">
        <div className="contact-section2">
          <p className="standout-heading">Остались вопросы?</p>
          <p className="contact-info-text">Свяжитесь с нами по номеру телефона или оставьте заявку и мы свяжемся с Вами.</p>
        </div>
        <p className="contact-info-heading">
          <span>+</span>
          <span className="contact-number-text-style">375-(29)-928-92-89</span>
        </p>
        <Button text="Оставить заявку" onClick={modalOpen} className="call-to-action-btn"/>
      </div>
      {/* Модальное окно */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Email modalClose={modalClose} />
            <button onClick={modalClose} className="close-modal-btn">x</button>
            <div className="orang-strip"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Parallax;