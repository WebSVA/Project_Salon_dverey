//import { useHistory } from 'react-router-dom';

function Button({ 
    text, 
    onClick, 
    navigateTo, 
    isModal 
}) {
    //const history = useHistory();

    const handleClick = () => {
        // if (navigateTo) {
        //     history.push(navigateTo); 
        // } else 
        if (isModal) {
            onClick(); 
        } else if (onClick) {
            onClick(); 
        }
    };

    return (
        <button onClick={handleClick} className="custom-button">
            {text}
        </button>
    );
}

export default Button;