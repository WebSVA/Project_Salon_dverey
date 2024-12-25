import "../../styles/contact/contact-card.css";
import ContactCard from "./ContactCard";
import map from "../../assets/maps-and-flags.png"
import phonecall from "../../assets/phone-call.png"
import mail from "../../assets/mail.png";
function ContactCardContainer(){
    return(
        <div className="contact-details-container">
        <div className="ContContainer">
            <ContactCard 
                imageSrc={map} 
                title="Наш адрес: " 
                description="г. Сморгонь, ул. Петра Балыша 27" 
            />
            <ContactCard
                imageSrc = {mail}
                title = "Наша почта: "
                description="andrey.Yarashevich.2015@mail.ru"
            />
            <ContactCard
                imageSrc = {phonecall}
                title = "Наш нoмер телефона:"
                description="+375-29-928-9289"
            />
        </div>
        </div>
    )
}

export default ContactCardContainer;