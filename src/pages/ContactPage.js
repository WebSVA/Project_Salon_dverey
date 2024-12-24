import Breadcrumbs from "../components/Breadcrumbs";
import ContactMap from "../components/ContactMap";
import Email from "../Email";
import "../styles/contact/contact.css"
import "../styles/contact/contactForm.css"
import {Helmet} from "react-helmet";

function ContactPage(){
    return(
        <>
          <Helmet>
            <title>Салон Дверей Сморгонь – Контакты</title>
            <meta name="description" content="Свяжитесь с нами: телефон, адрес, форма обратной связи. Салон дверей – качественные двери в Сморгони." />
            <meta name="keywords" content="двери, двери Сморгонь, контакты, телефон, адрес, форма связи, Сморгонь" />
            <meta name="author" content="Салон дверей" />
            <meta property="og:title" content="Салон Дверей Сморгонь – Контакты" />
            <meta property="og:description" content="Свяжитесь с нами: телефон, адрес, форма обратной связи. Салон дверей – качественные двери в Сморгони." />   
            <meta property="og:type" content="website" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Helmet>
          

        <Breadcrumbs title="Контакты" />
        <div className="contact-container-all">
                <div className="contact-container">
                     <div className="email-contact-container">
                     <Email></Email>
                     </div>
                   
                </div>
           
            </div>
        <div className="conmap"><ContactMap/></div>
        </>
    );
}

export default ContactPage;