import "../styles/contactHeader.css";
import phoneCallIcon from '../assets/phone-call.png';
import emailIcon from '../assets/mail.png';
import mapFlagIcon from '../assets/maps-and-flags.png';

function ContactHeader() {
  return (
    <div className="contact-info-section">
      <div className="contact-info-section2">
        <div className="contact-info-section1">
          <div className="contact-info-section1">
            <a href="tel:80299289289" className="contact-link">
                <img src={phoneCallIcon} className="contact-info-icon" alt="phoneIcon" />
                <p className="phone-number-text-style">+375-(29)-928-92-89</p>
            </a>
          </div>
          <div className="contact-info-container">
            <a href="mailto:andrey.Yarashevich.2015@mail.ru" className="contact-link">
                <img src={emailIcon} className="contact-info-icon" alt="emailIcon"/>
                <p className="email-info-text-style">andrey.Yarashevich.2015@mail.ru</p>
            </a>
        </div>
        </div>
        <div className="contact-info-section1">
            <a 
                href="https://www.google.com/maps/place/Салон+Дверей/@54.477158,26.4010075,18.61z/data=!4m14!1m7!3m6!1s0x46dc43b03d29e861:0xd1b95d280a8663fa!2z0YPQuy4g0J_QtdGC0YDQsCDQkdCw0LvRi9GI0LAgMjcsINCh0LzQvtGA0LPQvtC90YwsINCT0YDQvtC00L3QtdC90YHQutCw0Y8g0L7QsdC70LDRgdGC0Yw!3b1!8m2!3d54.4804288!4d26.4037027!3m5!1s0x46dc43a9e4ed6775:0xfcfc99047167bbdc!8m2!3d54.4774114!4d26.4030024!16s%2Fg%2F11p5xkwxmh?entry=ttu&g_ep=EgoyMDI0MTExOC4wIKXMDSoASAFQAw%3D%3D. Петра Балыша 27, Сморгонь, Гродненская область" 
                className="contact-link" 
                target="_blank" 
                rel="noopener noreferrer" // secure
                >
                <img src={mapFlagIcon} className="contact-info-icon" alt="Map" />
                <p className="address-label">г. Сморгонь, ул. Петра Балыша 27</p>
            </a>
        </div>
      </div>
    </div>
  );
}

export default ContactHeader;
