import "../styles/aboutUsSection.css";
import React, { useState } from 'react';
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
            <div className="animate content-container _animate-items">
            <div className="separation-container">
                <div className="title-container">
                    <p className="title">О фирме Название фирмы</p>
                </div>
                <div className="separation-line-1"></div>
                <div className="text-info">
                    <p className="before-text">
                    Функциональность, красота и высокое качество изготовления изделий
                    </p>
                    <p className="main-text">
                    Наша компания была основана в 2005 году и с тех пор зарекомендовала себя как ведущий производитель дверей в регионе. 
                    Наша фирма предлагает широкий ассортимент продукции, включая межкомнатные и входные двери, выполненные из высококачественных материалов. 
                    Мы гордимся тем, что используем современные технологии и инновационные решения, что позволяет нам создавать не только эстетически привлекательные, 
                    но и надежные изделия. В течение более 
                    чем 15 лет мы работаем над тем, чтобы обеспечить наших клиентов отличным сервисом и индивидуальным подходом.
                    </p>
                </div>
                <div className="button-with-line">
                    <Button  className="button-link-aboutUs" text = "Узнать больше"/>
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
