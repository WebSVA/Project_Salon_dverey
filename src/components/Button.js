//import { useHistory } from 'react-router-dom';

function Button({ 
    text, 
    onClick, 
    type = 'button', 
    isModal,
    className,
    href
}) {


    const handleClick = () => {
        if (isModal) {
            onClick(); 
        } else if (onClick) {
            onClick(); 
        }
    };
    if (href) {
        return (
            <a 
                href={href} 
                className={`custom-button ${className}`} 
                onClick={isModal ? handleClick : undefined}
            >
                {text}
            </a>
        );
    }

    return (
        <button type={type} onClick={handleClick} className={`custom-button ${className}`}>
            {text}
        </button>
    );
}

export default Button;