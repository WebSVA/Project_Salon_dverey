//import { useHistory } from 'react-router-dom';

function Button({ 
    text, 
    onClick, 
    type, 
    isModal,
    className
}) {


    const handleClick = () => {
        if (isModal) {
            onClick(); 
        } else if (onClick) {
            onClick(); 
        }
    };

    return (
        <button type={type} onClick={handleClick} className={`custom-button ${className}`}>
            {text}
        </button>
    );
}

export default Button;