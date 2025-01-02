import Breadcrumbs from "../components/Breadcrumbs";
import Email from "../Email";
import "../styles/contact/contact.css";
import "../styles/contact/contactForm.css";
import ContactCardContainer from "../components/Contacts/ContactCardContainer";
import { Helmet } from "react-helmet";

function ContactPage() {
    return (
        <>
            <Helmet>
                <title>Двери тут Сморгонь – Контакты</title>
                <meta name="description" content="Свяжитесь с нами: телефон, адрес, форма обратной связи. Салон Двери тут Сморгонь – качественные двери." />
                <meta name="keywords" content="двери,салон дверей, двери Сморгонь,двери тут, контакты, телефон, адрес, форма связи, Сморгонь" />
                <meta name="author" content="Двери тут Сморгонь" />
                <meta property="og:title" content="Двери тут Сморгонь – Контакты" />
                <meta property="og:description" content="Свяжитесь с нами: телефон, адрес, форма обратной связи. Салон Двери тут Сморгонь – качественные двери." />
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
    title="map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162.4100857677473!2d26.403004963698507!3d54.47739138448719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dc43a9e4ed6775%3A0xfcfc99047167bbdc!2z0KHQsNC70L7QvSDQlNCy0LXRgNC10Lk!5e0!3m2!1sru!2sby!4v1735555750022!5m2!1sru!2sby!4z2" 
    allowFullScreen 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade">
</iframe>
            </div>
        </>
    );
}

export default ContactPage;