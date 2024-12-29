import "../styles/shadow.css";
import Slider from '../components/Slider.js'; // Импорт компонента Slider
import Button from './Button';
import { Link } from 'react-router-dom';

function ShadowSlider() {
  return (
    <div className="container">
      {/* Shadow: Левая часть */}
      <div className="shadow-overlay">
        <div className="door-both">
          <div className="shadow-container">
            <div className="door-sales-section">
              <div className="door-description-container">
                <div className="door-divider" />
                <p className="door-text-block">
                  
                    Продажа и установка
                    межкомнатных и входных
                    дверей по доступным ценам

                </p>
              </div>
              <p className="product-description-text-style">
                Наша фирма предлагает широкий ассортимент продукции, включая межкомнатные и входные двери, выполненные из высококачественных материалов.
              </p>
              <div className="door-button-container">
              <Link  to='/about'><Button className="detail-button" text="Подробнее"></Button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slider-container">
        <Slider />
      </div>
    </div>
  );
}

export default ShadowSlider;
