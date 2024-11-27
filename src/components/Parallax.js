import React from 'react';
import '../styles/parallax.css';
import Button from './Button';
import Email from '../Email';
import { useState } from 'react';
const Parallax = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalOpen = ()=>{
      setIsModalOpen(true);
  }
  const modalClose = ()=>{
    setIsModalOpen(false);
  }

    return (  
    <div class="parallax">
  <div className="contact-section">
      
      <div className="contact-section2">
      <p className="standout-heading">Остались вопросы?</p>
      <p className="contact-info-text">Свяжитесь с нами по номеру телефона или оставьте заявку и мы свяжемся с Вами.</p>
    </div>
        <p className="contact-info-heading">
          <span>+</span>
          <span className="contact-number-text-style">8 029 928-92-89</span>
        </p>
        {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
       
        <Button text="Оставить заявку" onClick={modalOpen} className="call-to-action-btn"/>
    

      </div>
       {/* Модальное окно */}
       {isModalOpen && (
                <div className="modal-overlay" onClick={modalClose}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <Email />
                        {/* <button onClick={modalClose}>x</button> */}
                        <button  onClick={modalClose} className="close-modal-btn">x</button>
    
                        <div className="orang-strip"></div>
                    </div>
                    
                </div>
                
            )}
    </div>
   
  
     );
};

export default Parallax;