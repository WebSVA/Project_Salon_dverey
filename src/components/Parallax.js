import React from 'react';
import '../styles/parallax.css';
const Parallax = () => {
  
    return (  
    <div class="parallax">
      <div className="contact-section">
          <div className="contact-section2">
            <p className="standout-heading">Остались вопросы?</p>
            <p className="contact-info-text">Свяжитесь с нами по номеру телефона или оставьте заявку и мы свяжемся с Вами.</p>
          </div>
            <p className="contact-info-heading">
              <span className="contact-number-text-style">8 029 928-92-89</span>
            </p>
            {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
            <button className="call-to-action-btn">Оставить заявку</button>
      </div>
    </div>
   
  
     );
};

export default Parallax;