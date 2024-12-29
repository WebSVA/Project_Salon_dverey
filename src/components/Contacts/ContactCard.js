import "../../styles/contact/contact-card.css";
function ContactCard({ imageSrc, title,media, description }) {
    return (
        <div className="contact-card">
            <div className="imgContainer">
            <img src={imageSrc} className="contact-card__image" alt="imageSrc" />
            </div>
            <div className="contact-text">
            <h3 className="contact-card__title">{title}</h3>
            <div className="contact-card__description">
            <a href={media} className="media-link">
            <p >{description}</p>
            </a>
            </div>
            </div>
        </div>
    );
}
export default ContactCard;