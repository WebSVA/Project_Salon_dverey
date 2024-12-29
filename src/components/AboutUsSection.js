import "../styles/aboutUsSection.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import testImg from '../assets/imgAboutUs.png';
import Button from "./Button";

function AboutUsSection(){

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return(
        <div className="about-us-section">
            <div className="content-container">
            <div className="separation-container">
                <div className="title-container">
                    <h1 className="title">О салон «DVERITYT»</h1>
                </div>
                <div className="separation-line-1"></div>
                <div className="text-info">
                    <p className="before-text">
                    Функциональность, красота и высокое качество изготовления изделий
                    </p>
                    <p className="main-text">
                    Салон дверей уже не первый год на рынке, и успел зарекомендовать себя в качестве надежного партнера, приобретя огромное число благодарных постоянных покупателей.
                    Мы предлагаем нашим клиентам широчайший выбор моделей и цветов. Все модели специально разработаны с учетом очень разных вкусовых предпочтений розничных клиентов. 
                    Мы гордимся тем, что используем современные технологии и инновационные решения, что позволяет нам создавать не только эстетически привлекательные, 
                    но и надежные изделия. Заказывая двери у нас, вы получаете возможность дальнейшего гарантийного обслуживания дверей.
                    </p>
                </div>
                <div className="button-with-line">
                    <Link to='/about'><Button  className="button-link-aboutUs" text = "Узнать больше"></Button></Link>
                    <div className="separation-line-2"></div>
                </div>
            </div>
            <div className="separation-container">
            </div>
            </div>
        </div>
    );
}

export default AboutUsSection;
