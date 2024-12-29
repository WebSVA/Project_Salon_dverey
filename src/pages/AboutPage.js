import Breadcrumbs from "../components/Breadcrumbs";
import '../styles/app.css';
import { Helmet } from "react-helmet";
import AboutUsPageContainer from "../components/aboutus/AboutUsPageContainer";
function AboutPage() {
    
    return (
        <>
         <Helmet>
            <title>Двери тут Сморгонь – О компании.</title>
            <meta name="description" content="Салон Двери тут Сморгонь. Узнайте больше о нас" />
 <meta name="keywords" content="двери, двери Сморгонь,салон дверей, двери тут, о компании, производитель дверей, Сморгонь" />
            <meta name="author" content="Двери тут Сморгонь" />
            <meta property="og:title" content="Двери тут Сморгонь – О компании." />
            <meta property="og:description" content="Салон Двери тут Сморгонь. Узнайте больше о нас" />   
            <meta property="og:type" content="website" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Helmet>
            <Breadcrumbs title="О нас" />
            <AboutUsPageContainer/>

        </>
    );
}

export default AboutPage;