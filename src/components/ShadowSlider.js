import "../styles/shadow.css";
import Slider from '../components/Slider.js'; // Импорт компонента Slider
import Button from './Button';

function ShadowSlider() {
  return (
    <div className="container">
      {/* Shadow: Левая часть */}
      <div className="shadow-overlay">
        <div className="door-both">
          <div className="shadow-container">
            <div className="animate door-sales-section _animate-items">
              <div className="door-description-container">
                <div className="door-divider" />
                <p className="door-text-block">
                  <span className="door-text-styler">
                    Продажа и установка
                    межкомнатных и входных
                    дверей по доступным ценам
                  </span>
                </p>
              </div>
              <p className="product-description-text-style">
                Наша фирма предлагает широкий ассортимент продукции, включая межкомнатные и входные двери, выполненные из высококачественных материалов.
              </p>
              <div className="door-button-container">
                <Button className="detail-button" text="Подробнее"></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Slider: Правая часть */}
      <Slider />
    </div>
  );
}

export default ShadowSlider;
