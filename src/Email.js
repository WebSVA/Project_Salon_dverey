import React from "react";

import "./styles/email.css"; 
import Button from "./components/Button";
import './styles/parallax.css';


function Email() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "91c8e235-64a0-47ab-9636-88a7dc3a30cd");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
//gfhjkl;
  return (
    <div className="email-container">
    <h2>Отправить сообщения</h2>
    <h3>Напишите нам и мы свяжемся с Вам  и ответим на все интересующие Вас вопросы.</h3>
    <form onSubmit={onSubmit} className="email-form">
      <div className="input-row">
      <div className="input-group">
        <label htmlFor="name">Ваше имя:</label>
        <input type="text" name="name" id="name" required />
      </div>
      <div className="input-group">
        <label htmlFor="phone">Ваш номер телефона:</label>
        <input type="text" name="phone" id="phone" required />
      </div>
      <div className="input-group">
        <label htmlFor="email">Ваша почта:</label>
        <input type="email" name="email" id="email" required />
      </div>
      </div>
      <div className="input-group-textarea-group">
        <div className="text-only">
        <label htmlFor="message">Ваш текст:</label>
        <textarea name="message" id="message" required></textarea>
        </div>
     
      <div className="submit-group">
      <Button text="Отправить" onClick={onSubmit} className="call-to-action-btn"/>
        </div>
        <div className="orang-strip"></div>
      </div>
    
    </form>
  </div>
  );
}

export default Email;
