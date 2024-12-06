import Breadcrumbs from "../components/Breadcrumbs";
import ContactMap from "../components/ContactMap";
import "../styles/contact.css"
function ContactPage(){
    return(
        <>
        <Breadcrumbs title="Контакты" />
        <div className="conmap"><ContactMap/></div>
        </>
    );
}

export default ContactPage;