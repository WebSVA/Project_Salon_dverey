import "../styles/locDisplay.css";

function LocationDisplay() {
  return (
        <div className="store-info-container">
          <div className="address-info-container">
            <div className="orange-pill" />
          </div>
          <p className="address-info-section">
            <span className="address-info-heading">
              Адрес магазина:
              <br />
            </span>
            <span className="address-info-text-style">
              г. Сморгонь, ул. Петра Балыша 27
              <br />
              <br />
            </span>
            <span className="address-info-heading">Время работы:</span>
            <span className="address-info-text-style">
              <br />
            </span>
            <span className="address-info-text-style">
              Понедельник – Пятница:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10:00 – 19:00
              <br />
              Суббота{" "}
            </span>
            <span className="address-details">–</span>
            <span className="address-info-text-style">
              {" "}
              Воскресенье:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10:00 – 15:00
              <br />
            </span>
            <span className="address-info-text-style">
              <br />
            </span>
            <span className="address-info-heading">
              Телефон: <br />
            </span>
            <span className="address-info-text-style">8 029 928-92-89</span>
          </p>
        </div>
  );
    }
    


export default LocationDisplay;