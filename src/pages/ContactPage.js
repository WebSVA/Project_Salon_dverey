import Breadcrumbs from "../components/Breadcrumbs";
import ContactMap from "../components/ContactMap";
import Email from "../Email";
import "../styles/contact/contact.css";
import "../styles/contact/contactForm.css";
import ContactCardContainer from "../components/Contacts/ContactCardContainer";
import { Helmet } from "react-helmet";

function ContactPage() {
    return (
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
                    <ContactCardContainer />
                    <div className="email-contact-container">
                        <Email />
                    </div>
                </div>
            </div>
            <div className="conmap">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2318.008674774923!2d26.401127776061678!3d54.480428772639925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dc43b03d29e861%3A0xd1b95d280a8663fa!2z0YPQuy4g0J_QtdGC0YDQsCDQkdCw0LvRi9GI0LAgMjcsINCh0LzQvtGA0LPQvtC90YwsINCT0YDQvtC00L3QtdC90YHQutCw0Y8g0L7QsdC70LDRgdGC0Yw!5e0!3m2!1sru!2sby!4v1735417256297!5m2!1sru!2sby" 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </>
    );
}

export default ContactPage;