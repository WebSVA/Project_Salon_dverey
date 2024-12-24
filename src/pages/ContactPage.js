import Breadcrumbs from "../components/Breadcrumbs";
import ContactMap from "../components/ContactMap";
import Email from "../Email";
import "../styles/contact/contact.css"
import "../styles/contact/contactForm.css"
function ContactPage(){
    return(
        <>
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