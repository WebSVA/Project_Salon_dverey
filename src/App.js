import React, { useEffect } from 'react';

import {Routes, Route, Link} from 'react-router-dom';
import './styles/app.css';

import ContactPage from './pages/ContactPage';
import CatalogPage from './pages/CatalogPage';
import AboutPage from './pages/AboutPage';

import ContactHeader from './components/ContactHeader';
import Footer from './components/Footer'
import HomePage from './pages/HomePage';
import Button from './components/Button';

import logoIcon from './assets/logo.svg';
import "./styles/animation/animation.css";
import "./styles/button.css";


function App(){
  useEffect(() => {
    const animItems = document.querySelectorAll('._animate-items');

    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);

        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;
                let animItemPoint = window.innerHeight - animItemHeight / animStart;

                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                // Используем window.scrollY вместо pageYOffset
                if ((window.scrollY > animItemOffset - animItemPoint) && window.scrollY < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('_activeScroll');
                } else {
                    animItem.classList.remove('_activeScroll');
                }
            }
        }

        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
        }

        setTimeout(() => {
            animOnScroll();
        }, 300);

        return () => {
            window.removeEventListener('scroll', animOnScroll);
        };
    }
}, []);
    return(
      <>
      <ContactHeader/>
      <header className='header'>
        <div className='container-header'>
          <div className='logo-container'>
            <img src={logoIcon} className='logo'></img>
            <p className='title-company'>Салон дверей</p>
          </div>
          <div className='links-button-container'>
            <div className='link-container'>
            <input type="checkbox" id="burger-checkbox" className="burger-checkbox"/>
            <label for="burger-checkbox" className="burger"></label>
              <ul className='menu-list'>
                <li><a className='links' href='/'>Главная</a><div className='line-div'/></li>
                <li><a className='links' href='/about'>О нас</a><div className='line-div'/></li>
                <li><a className='links' href='/catalog'>Каталог</a><div className='line-div'/></li>
                <li><a className='links' href='/contact'>Контакты</a><div className='line-div'/></li>
              </ul>
              
            </div>
           
          </div>
        </div>
      </header>
      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/catalog" element={<CatalogPage/>}/>
        {/* если ничего не совпало*/}
        <Route path="*" element={<HomePage/>}/>
      </Routes>
      <Footer/>
      </>
    );
}

export default App;