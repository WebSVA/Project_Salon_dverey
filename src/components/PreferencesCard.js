import "../styles/preferences.css"
function PreferencesCard({ imageSrc, title, description }) {
    return (
        <div className="animate preferences-card _animate-items">
            <img src={imageSrc} className="preferences-card__image" />
            <h3 className="preferences-card__title">{title}</h3>
            <p className="preferences-card__description">{description}</p>
            <div className="orange-strip"></div>
        </div>
    );
}
export default PreferencesCard;