import { useState } from "react";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

export const  NavButton = ( { topic, handleClick, iconName } ) => {
    const [ iconColor, setIconColor ] = useState('EAEAEA');
   
    const handleOnMouseOver = () => {
        setIconColor('893168');
    }

    const handleOnMouseOut = () => {
        setIconColor('EAEAEA');
    }
    
    return (
        <NavLink
            to={`/${topic.toLowerCase()}`}
            activeClassName="highlighted"
        >
            <button 
                type='button' 
                className='btn btn--nav' 
                onMouseOver={e => handleOnMouseOver()}
                onMouseOut={e => handleOnMouseOut()}
                onClick={e => handleClick(topic)}
            >
                <img src={`https://img.icons8.com/glyph-neue/${iconColor}/32/${iconName}`} alt={topic}/>
                <p>{ topic }</p>
            </button>


        </NavLink>

        
    )
}

NavButton.propTypes = {
    topic: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    iconName: PropTypes.string.isRequired
}