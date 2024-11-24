import React from "react";
import { Link, useLocation } from "react-router-dom"; // Для маршрутизации
import "../styles/breadcrumbs.css";

function Breadcrumbs({ title }) {
  const location = useLocation();

  // Генерация хлебных крошек
  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split("/").filter((x) => x);

    // Формируем хлебные крошки, включая "Главная"
    const breadcrumbs = [
      <span key="home">
        <a href="/">Главная</a> /
      </span>,
      ...pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return (
          <span key={to}>
            {!isLast ? (
              <>
                <a href={to}>{value}</a> /
              </>
            ) : (
              <span>{value}</span>
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
