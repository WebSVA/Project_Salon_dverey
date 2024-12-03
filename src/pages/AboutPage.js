import React, { useEffect, useState } from 'react';
import Breadcrumbs from "../components/Breadcrumbs";
import '../styles/app.css';

function AboutPage() {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScroll(window.scrollY > 300); // Показываем кнопку, если прокручено более 300px
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Плавная прокрутка вверх
    };
    
    return (
        <>
            <Breadcrumbs title="О нас" />

            {showScroll && (
                <button className="scroll-to-top" onClick={scrollToTop}>
                    Вверх
                </button>
            )}
        </>
    );
}

export default AboutPage;