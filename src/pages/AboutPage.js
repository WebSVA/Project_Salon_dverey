import Breadcrumbs from "../components/Breadcrumbs";
import '../styles/app.css';
import { Helmet } from "react-helmet";
function AboutPage() {
    
    return (
        <>
         <Helmet>
            <title>Салон Дверей Сморгонь – О компании.</title>
            <meta name="description" content="Салон Дверей Сморгонь. Узнайте больше о нас" />
 <meta name="keywords" content="двери, двери Сморгонь, о компании, производитель дверей, Сморгонь" />
            <meta name="author" content="Салон дверей" />
            <meta property="og:title" content="Салон Дверей Сморгонь – О компании." />
            <meta property="og:description" content="Салон Дверей Сморгонь. Узнайте больше о нас" />   
            <meta property="og:type" content="website" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Helmet>
            <Breadcrumbs title="О нас" />

        </>
    );
}

export default AboutPage;