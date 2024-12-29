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
                media="https://www.google.com/maps/place/Салон+Дверей/@54.477158,26.4010075,18.61z/data=!4m14!1m7!3m6!1s0x46dc43b03d29e861:0xd1b95d280a8663fa!2z0YPQuy4g0J_QtdGC0YDQsCDQkdCw0LvRi9GI0LAgMjcsINCh0LzQvtGA0LPQvtC90YwsINCT0YDQvtC00L3QtdC90YHQutCw0Y8g0L7QsdC70LDRgdGC0Yw!3b1!8m2!3d54.4804288!4d26.4037027!3m5!1s0x46dc43a9e4ed6775:0xfcfc99047167bbdc!8m2!3d54.4774114!4d26.4030024!16s%2Fg%2F11p5xkwxmh?entry=ttu&g_ep=EgoyMDI0MTExOC4wIKXMDSoASAFQAw%3D%3D. Петра Балыша 27, Сморгонь, Гродненская область" 
                description="г. Сморгонь, ул. Петра Балыша 27" 
            />
            <ContactCard
                imageSrc = {mail}
                title = "Наша почта: "
                media="mailto:andrey.Yarashevich.2015@mail.ru"
                description="andrey.Yarashevich. 2015@mail.ru"
            />
            <ContactCard
                imageSrc = {phonecall}
                title = "Наш нoмер телефона:"
                media = "tel:80299289289"
                description="+375-(29)-928-92-89"
            />
        </div>
        </div>
    )
}

export default ContactCardContainer;