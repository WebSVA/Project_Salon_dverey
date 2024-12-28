import React, { useEffect, useState } from 'react';

import { Routes, Route, Link } from 'react-router-dom';
import './styles/app.css';

import ContactPage from './pages/ContactPage';
import CatalogPage from './pages/CatalogPage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import HomePage from './pages/HomePage';

import ContactHeader from './components/ContactHeader';
import Footer from './components/Footer'

import logoIcon from './assets/logo.svg';
import "./styles/button.css";


function App(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toogleMenu = ()=>{
    setIsMenuOpen((prev)=> !prev);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

return (
  
   <>
    <ContactHeader />
    <header className="header">
      <div className="container-header">
      <Link className="links" to="/" onClick={closeMenu}><div className="logo-container">
        <img src={logoIcon} className="logo" alt="Логотип"></img>
          <p className="title-company">Салон дверей</p>
        </div></Link>
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
              <li>
                <Link className="links" to="/" onClick={closeMenu}>
                  Главная
                </Link>
                <div className="line-div" />
              </li>
              <li>
                <Link className="links" to="/about" onClick={closeMenu}>
                  О нас
                </Link>
                <div className="line-div" />
              </li>
              <li className="dropdown">
                <Link className="links dropdown-link" to="/catalog" onClick={closeMenu}>
                  Каталог
                  <span className="arrow"></span>
                </Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/catalog/interior-doors" onClick={closeMenu}>
                    Межкомнатные двери
                  </Link>
                  <Link className="dropdown-item" to="/catalog/entry-doors" onClick={closeMenu}>
                    Входные двери
                  </Link>
                </div>
                <div className="line-div" />
              </li>
              <li>
                <Link className="links" to="/contact" onClick={closeMenu}>
                  Контакты
                </Link>
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
    </>
  
  );

}

export default App;