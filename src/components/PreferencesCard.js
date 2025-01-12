import "../styles/preferences.css"
function PreferencesCard({ imageSrc, title, description }) {
    return (
        <div className="animate preferences-card">
            <img src={imageSrc} className="preferences-card__image" alt="doorPreferences" />
            <h3 className="preferences-card__title">{title}</h3>
            <p className="preferences-card__description">{description}</p>
            <div className="orange-strip"></div>
        </div>
    );
}
export default PreferencesCard;