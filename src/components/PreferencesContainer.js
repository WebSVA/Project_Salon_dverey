import "../styles/preferences.css"
import PreferencesCard from "./PreferencesCard"
import measureImage from '../assets/tape-measure.png';
import materialImage from '../assets/material.png';
import trackImage from '../assets/cargo-truck.png';

function PreferencesContainer(){
    return(
        <div className="pref-details-container">
        <p className="pref-title-text-style">Нас выбирают за</p>
        <div className="PrefContainer">
            <PreferencesCard 
                imageSrc={measureImage} 
                title="Профессиональная установка с гарантией" 
                description="Наша команда опытных специалистов обеспечит быструю и качественную установку ваших дверей. Мы гарантируем, что каждая дверь будет установлена правильно и надежно, чтобы вы могли наслаждаться ею без забот." 
            />
            <PreferencesCard
                imageSrc = {materialImage}
                title = "Широкий выбор стилей и материалов"
                description="У нас есть двери в различных стилях — от классических до современных. Все изделия изготовлены из качественных материалов, что гарантирует долговечность и привлекательный внешний вид, идеально подходящий вашему интерьеру."
            />
            <PreferencesCard
                imageSrc = {trackImage}
                title = "Доставка прямо к вашему порогу"
                description="Наша команда позаботится о том, чтобы ваши двери были доставлены в идеальном состоянии и в удобное для вас время, что сэкономит ваше время и силы. Вы можете быть уверены, что ваши двери прибудут вовремя и без повреждений."
            />
        </div>
        </div>
    )
}

export default PreferencesContainer;