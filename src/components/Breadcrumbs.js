import {React, useState} from "react";
import { useLocation } from "react-router-dom"; // Для маршрутизации
import "../styles/breadcrumbs.css";
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ProductPage from "../pages/ProductPage";
import CatalogPage from "../pages/CatalogPage";



function Breadcrumbs({ title }) {
  const location = useLocation();
  const [resetFilters, setResetFilters] = useState(false);

  const handleFilterEmpty = () => {
    setResetFilters(true);
  };

  // Словарь для перевода сегментов URI
  const translations = {
    catalog: " Каталог",
    products: " Продукты",
    about: " О нас",
    contact: " Контакты",
    "interior-doors":  " Межкомнатные двери",
    "entry-doors":  " Входные двери",
    // Добавьте другие переводы по необходимости
  };

  // Функция для перевода сегмента на русский
  const translate = (segment) => translations[segment] || segment;

  // Генерация хлебных крошек
  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split("/").filter((x) => x);

    // Формируем хлебные крошки, включая "Главная"
    const breadcrumbs = [
      <span key="home">
        <Link to="/">Главная</Link> /
      </span>,
      ...pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return (
          <span key={to}>
            {!isLast ? (
              <>
                <Link to={to}>{translate(value)}</Link> /
              </>
            ) : (
              <span>{translate(value)}</span>
            )}
          </span>
        );
      }),
    ];

    return breadcrumbs;
  };

  return (
    <div className="transparent-overlay-container">
      <div className="shadow">
        <p className="product-title-text-style">{title}</p>
        <p className="product-info-heading">{generateBreadcrumbs()}</p>
      </div>
    </div>
  
  );
}

export default Breadcrumbs;
