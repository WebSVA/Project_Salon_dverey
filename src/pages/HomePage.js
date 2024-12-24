import Location from '../components/Location';
import ShadowSlider from '../components/ShadowSlider'
import PreferencesContainer from '../components/PreferencesContainer';
import AboutUsSection from '../components/AboutUsSection'
import Parallax from '../components/Parallax';
import UpCatalogSection from '../components/CatalogSection';
import { Helmet } from "react-helmet";

function HomePage(){
    return(
        <>
          <Helmet>
            
            <title>Салон Дверей Сморгоньь – Качественные двери по доступным ценам.</title>
            <meta name="description" content="Широкий ассортимент продукции, включая межкомнатные и входные двери, выполненные из высококачественных материалов" />
            <meta name="keywords" content="двери, двери Сморгонь, входные двери, межкомнатные двери, купить двери, установка дверей, Сморгонь" />
            <meta name="author" content="Салон дверей" />
            <meta property="og:title" content="Качественные двери по доступным ценам – Салон дверей Сморгонь" />
            <meta property="og:description" content="Широкий выбор дверей для дома и офиса. Профессиональная установка и доставка." />   
            <meta property="og:type" content="website" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Helmet>
        <ShadowSlider/>
        <PreferencesContainer/>
        <UpCatalogSection/>
        <AboutUsSection/>
        <Parallax/>
        <Location/>
        </>
    );
}

export default HomePage;