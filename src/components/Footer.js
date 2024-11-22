import "../styles/footer.css";
import viberIcon from '../assets/viber.png';
import tgIcon from '../assets/telegram.png';
import instaIcon from '../assets/instagram.png';
import phoneIcon from '../assets/phone-call.png';
import mapIcon from '../assets/maps-and-flags.png';
import clockIcon from '../assets/clock.png';



function ComponentYouSelected() {
return (
    <div className="main-content-container">
      <div className="company-info-section">
        <div className="exclusive-door-firm-section">
          <div className="flex-container-with-text">
            <div className="company-title-container">
              <div className="company-logo-container" />
              <p className="company-title-style">Салон дверей</p>
            </div>
            <div className="company-header-separator" />
          </div>
          <div className="exclusive-door-styles">
            <p className="exclusive-door-text">
              Частное предприятие «Cалон дверей» в Сморгони предлагает эксклюзивные двери под заказ для клиентов из Вилейки, Сморгони, Молодечно, Островца, Воложина, Мяделя и других городов Беларуси. Мы
              специализируемся на производстве межкомнатных и входных дверей, которые идеально сочетают в себе стиль, надежность и долговечность. Наша команда профессионалов гарантирует высокое
              качество изготовления, быстрое выполнение заказов и доступные цены.
            </p>
              <div className="exclusive-doors-gallery">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={instaIcon} className="location-icon" alt="Instagram" />
                </a>
                <a href="https://www.viber.com" target="_blank" rel="noopener noreferrer">
                    <img src={viberIcon} className="location-icon" alt="Viber" />
                </a>
                <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                    <img src={tgIcon} className="location-icon" alt="Telegram" />
                </a>
              </div>
          </div>
          <div className="under-separator" />
        </div>
        <div className="contact-info-container1">
            <div className="simple-contact-info">
                <div className="title-contact-container">
                    <img src={mapIcon} className="title-icon" />
                    <p className="title-contact">Локация</p>
                </div>
                <p className="contact-info-style">г. Сморгонь, ул. Петра Балыша 27</p>
            </div>
            <div className="simple-contact-info">
                <div className="title-contact-container">
                    <img src={phoneIcon} className="title-icon" />
                    <p className="title-contact">Связаться с нами</p>
                </div>
                <p className="contact-info-style">Тел: 8 029 928-92-89</p>
                <a href="mailto:info@gmail.com" className="email-link">
                    <span className="email-label-text-style">Email: </span>
                    <span className="email-link-text-style">&nbsp;info@gmail.com</span>
                </a>
            </div>
            <div className="simple-contact-info">
                <div className="title-contact-container">
                    <img src={clockIcon} className="title-icon" />
                    <p className="title-contact">График работы</p>
                </div>
                <p className="contact-info-style">
                  Понедельник – Пятница:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10:00 – 19:00
                </p>
                <p className="contact-info-style">
                  Суббота – Воскресенье:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10:00 – 15:00
                </p>
            </div>
        </div>
      </div>
      <div className="orange-line"/>
    </div>
  );
}
export default ComponentYouSelected;