import Breadcrumbs from "../components/Breadcrumbs";
import ContactMap from "../components/ContactMap";
import ContactForm from "../components/Contacts/ContactForm";
import "../styles/contact.css"
function ContactPage(){
    return(
        <>
        <Breadcrumbs title="Контакты" />
<ContactForm></ContactForm>
        <div className="conmap"><ContactMap/></div>
        </>
    );
}

export default ContactPage;