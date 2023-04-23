import { useState } from "react"

export const  NavButton = ( { topic, handleClick, iconName } ) => {
    const [ iconColor, setIconColor ] = useState('EAEAEA');
   
    const handleOnMouseOver = () => {
        setIconColor('893168');
    }

    const handleOnMouseOut = () => {
        setIconColor('EAEAEA');
    }
    
    return (
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
    )
}