import "../../styles/contact/contact-card.css";
function ContactCard({ imageSrc, title, description }) {
    return (
        <div className="contact-card">
            <div className="imgContainer">
            <img src={imageSrc} className="contact-card__image" alt="imageSrc" />
            </div>
            <div className="contact-text">
            <h3 className="contact-card__title">{title}</h3>
            <p className="contact-card__description">{description}</p>
            </div>
        </div>
    );
}
export default ContactCard;