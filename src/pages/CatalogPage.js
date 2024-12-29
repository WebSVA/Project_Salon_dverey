import Breadcrumbs from "../components/Breadcrumbs";
import CatalogContainer from '../components/catalog/CatalogContainer';
import { Helmet } from "react-helmet";
import { useEffect } from "react";

function CatalogPage({ doorType }) {
   
  useEffect(() => {
    window.scrollTo(0, 0); // Сбросить скролл на начало страницы
  }, []);

    return (
        <>
          <Helmet>
            <title>Салон Дверей Сморгонь – Каталог дверей</title>
            <meta name="description" content="Ознакомьтесь с каталогом дверей: входные, межкомнатные, дизайнерские двери. Доставка и установка." />
            <meta name="keywords" content="двери, двери Сморгонь, контакты, телефон, адрес, форма связи, Сморгонь" />
            <meta name="author" content="Салон дверей" />
            <meta property="og:title" content="Салон Дверей Сморгонь – Каталог дверей" />
            <meta property="og:description" content="Ознакомьтесь с каталогом дверей: входные, межкомнатные, дизайнерские двери. Доставка и установка." />   
            <meta property="og:type" content="website" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Helmet>
            <Breadcrumbs title="Каталог" />
            <CatalogContainer doorType={doorType}/>
        </>
    );
}

export default CatalogPage;