import React, { useState } from 'react';
import "../../styles/contact/contactform.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <form  className="form">
      <h2 className="heading">Отправить сообщения</h2>
      <p className="description">Напишите нам и мы свяжемся с Вами и ответим на все интересующие Вас вопросы.</p>
      <div className="inputGroup">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ваше имя:"
          className="input"
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Ваш номер телефона:"
          className="input"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Ваша почта:"
          className="input"
          required
        />
      </div>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Ваш текст:"
        className="textarea"
        required
      />
      <button type="submit" className="button">Отправить</button>
    </form>
  );
};

export default ContactForm;
