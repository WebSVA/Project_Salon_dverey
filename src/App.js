import React, { useEffect, useState } from 'react';

import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/app.css';

import ContactPage from './pages/ContactPage';
import CatalogPage from './pages/CatalogPage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import HomePage from './pages/HomePage';

import ContactHeader from './components/ContactHeader';
import Footer from './components/Footer'

import logoIcon from './assets/logo.svg';
import "./styles/animation/animation.css";
import "./styles/button.css";



function App(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toogleMenu = ()=>{
    setIsMenuOpen((prev)=> !prev);
  }

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
return (
  
   <Router>
    <ContactHeader />
    <header className="header">
      <div className="container-header">
      <a className="links" href="/"><div className="logo-container">
        <img src={logoIcon} className="logo" alt="Логотип"></img>
          <p className="title-company">Салон дверей</p>
        </div></a>
        <div className="links-button-container">
          <div className="link-container">
            <input
              type="checkbox"
              id="burger-checkbox"
              className="burger-checkbox"
              checked={isMenuOpen}
              onChange={toogleMenu}
            />
            <label htmlFor="burger-checkbox" className="burger"></label>
            <ul className="menu-list">
                <li key="home">
                    <Link className="links" to="/">Главная</Link>
                    <div className="line-div" />
                </li>
                <li key="about">
                  <Link className="links" to="/about">О нас</Link>
                  <div className="line-div" />
                </li>
                <li key="catalog" className="dropdown">
                  <Link className="links dropdown-link" to="/catalog">
                    Каталог
                    <span className="arrow"></span>
                  </Link>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/catalog/interior-doors">Межкомнатные двери</Link>
                    <Link className="dropdown-item" to="/catalog/entry-doors">Входные двери</Link>
                  </div>
                  <div className="line-div" />
                </li>
                <li key="contact">
                  <Link className="links" to="/contact">Контакты</Link>
                  <div className="line-div" />
                </li>
              </ul>
          </div>
        </div>
      </div>
    </header>
    <div className={`main-content ${isMenuOpen ? "shifted" : ""}`}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/interior-doors" element={<CatalogPage doorType="Межкомнатная дверь" />} />
        <Route path="/catalog/entry-doors" element={<CatalogPage doorType="Входная дверь" />} />
        <Route path="/catalog/:id" element={<ProductPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
    <Footer />
    </Router>
  
  );

}

export default App;