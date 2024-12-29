import "../styles/footer.css";
import viberIcon from '../assets/viber.png';
import tgIcon from '../assets/telegram.png';
import instaIcon from '../assets/instagram.png';
import phoneIcon from '../assets/phone-call.png';
import mapIcon from '../assets/maps-and-flags.png';
import clockIcon from '../assets/clock.png';
import whatsappIcon from '../assets/whatsapp.png';

function ComponentYouSelected() {
return (
    <div className="main-content-container">
      <div className="company-info-section">
        <div className="exclusive-door-firm-section">
          <div className="flex-container-with-text">
            <div className="company-title-container">
              <p className="company-title-style">О нас</p>
            </div>
            <div className="company-header-separator" />
          </div>
          <div className="exclusive-door-styles">
            <h1 className="exclusive-door-text">
              Cалон дверей «DVERITYT» в Сморгони предлагает эксклюзивные двери под заказ для клиентов из Сморгони, Молодечно, Ошмян, Островца, Минска и других городов Беларуси. Мы
              специализируемся на продаже межкомнатных и входных дверей, которые идеально сочетают в себе стиль, надежность и долговечность. Наша команда профессионалов гарантирует высокое
              качество, быстрое выполнение заказов и доступные цены.
            </h1>
              <div className="exclusive-doors-gallery">
              <a href="https://wa.me/375299289289?" target="_blank" rel="noopener noreferrer">
                    <img src={whatsappIcon} className="location-icon" alt="Whatsapp" />
                </a>
                <a href="https://www.instagram.com/dveritut.smrg/?locale=ru" target="_blank" rel="noopener noreferrer">
                    <img src={instaIcon} className="location-icon" alt="Instagram" />
                </a>
                <a href="viber://chat?number=%2B375299289289" target="_blank" rel="noopener noreferrer">
                    <img src={viberIcon} className="location-icon" alt="Viber" />
                </a>
                <a href="https://t.me/yaroshevichandrey" target="_blank" rel="noopener noreferrer">
                    <img src={tgIcon} className="location-icon" alt="Telegram" />
                </a>
              </div>
          </div>
          <div className="under-separator" />
        </div>
        <div className="contact-info-container1">
            <div className="simple-contact-info">
                <div className="title-contact-container">
                    <img src={mapIcon} className="title-icon" alt="mapIcon" />
                    <p className="title-contact">Локация</p>
                </div>
                <a 
                href="https://www.google.com/maps/place/Салон+Дверей/@54.477158,26.4010075,18.61z/data=!4m14!1m7!3m6!1s0x46dc43b03d29e861:0xd1b95d280a8663fa!2z0YPQuy4g0J_QtdGC0YDQsCDQkdCw0LvRi9GI0LAgMjcsINCh0LzQvtGA0LPQvtC90YwsINCT0YDQvtC00L3QtdC90YHQutCw0Y8g0L7QsdC70LDRgdGC0Yw!3b1!8m2!3d54.4804288!4d26.4037027!3m5!1s0x46dc43a9e4ed6775:0xfcfc99047167bbdc!8m2!3d54.4774114!4d26.4030024!16s%2Fg%2F11p5xkwxmh?entry=ttu&g_ep=EgoyMDI0MTExOC4wIKXMDSoASAFQAw%3D%3D. Петра Балыша 27, Сморгонь, Гродненская область" 
                className="contact-link" 
                target="_blank" 
                rel="noopener noreferrer" // secure
                >
                <p className="contact-info-style">г. Сморгонь, ул. Петра Балыша 27</p>
                </a>
            </div>
            <div className="simple-contact-info">
                <div className="title-contact-container">
                    <img src={phoneIcon} className="title-icon" alt="phoneIcon" />
                    <p className="title-contact">Связаться с нами</p>
                </div>
                <a href="tel:80299289289" className="email-link">
                  <p className="contact-info-style">Тел: +375-(29)-928-92-89</p>
                </a>
                <a href="mailto:andrey.Yarashevich.2015@mail.ru" className="email-link">
                    <span className="email-label-text-style">Email: </span>
                    <span className="email-link-text-style">&nbsp;andrey.Yarashevich.2015@mail.ru</span>
                </a>
            </div>
            <div className="simple-contact-info">
                <div className="title-contact-container">
                    <img src={clockIcon} className="title-icon" alt="clockIcon" />
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