import React, { useState } from "react";
import InputMask from "react-input-mask";
import "./styles/email.css";
import Button from "./components/Button";
import "./styles/parallax.css";

function Email({ modalClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const dataToSend = { ...formData, access_key: "4d3055e9-fc7d-4d4d-bd7b-7e2298a3c823" };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(dataToSend)
      });

      const data = await res.json();

      if (data.success) {
        console.log("Success", data);
        
        setFormData({ name: "", phone: "", email: "", message: "" }); 
        modalClose(); 
        alert("Ваша заявка отправлена.");
      } else {
        console.error("Ошибка отправки:", data);
      }
    } catch (error) {
      console.error("Ошибка отправки формы:", error);
    }
  };

  return (
    <div className="email-container">
      <h2>Отправить сообщения</h2>
      <h3>Напишите нам и мы свяжемся с Вами и ответим на все интересующие Вас вопросы.</h3>
      <form onSubmit={onSubmit} className="email-form">
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="name">Ваше имя:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Ваш номер телефона:</label>
            <InputMask
              mask="+375(99)-999-99-99"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+375(xx)-xxx-xx-xx"
            >
              {(inputProps) => <input type="text" {...inputProps} />}
            </InputMask>
          </div>
          <div className="input-group">
            <label htmlFor="email">Ваша почта:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="input-group-textarea-group">
          <div className="text-only">
            <label htmlFor="message">Ваш текст:</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="submit-group">
            <Button text="Отправить" type="submit" className="send-btn" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Email;
