import Breadcrumbs from "../components/Breadcrumbs";
import CatalogContainer from '../components/catalog/CatalogContainer';
import { Helmet } from "react-helmet";
import { useEffect } from "react";

function CatalogPage({ doorType, resetFilters, onResetFilters }) {
   
  useEffect(() => {
    window.scrollTo(0, 0); // Сбросить скролл на начало страницы
  }, []);

    return (
        <>
          <Helmet>
            <title>Двери тут Сморгонь – Каталог дверей Dveritut. Купить двери Сморгонь. Салон дверей Сморгонь. Входные и межкомнатные двери Сморгонь</title>
            <meta name="description" content="Ознакомьтесь с каталогом дверей: входные, межкомнатные, дизайнерские двери. Доставка и установка." />
            <meta name="keywords" content="двери,салон дверей, двери Сморгонь,двери тут, контакты, телефон, адрес, форма связи, Сморгонь" />
            <meta name="author" content="Салон дверей" />
            <meta property="og:title" content="Двери тут Сморгонь – Каталог дверей" />
            <meta property="og:description" content="Ознакомьтесь с каталогом дверей: входные, межкомнатные, дизайнерские двери. Доставка и установка." />   
            <meta property="og:type" content="website" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Helmet>
            <Breadcrumbs title="Каталог" />
            <CatalogContainer doorType={doorType} resetFilters={resetFilters} onResetFilters={onResetFilters}/>
        </>
    );
}

export default CatalogPage;