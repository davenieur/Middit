import { useState } from "react";
import PropTypes from 'prop-types';

export const SearchBar = ({ onChangeTopic }) => {
    const [ inputValue, setInputValue ] = useState('home');
    
    const onInputChange = e => {
        setInputValue(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        onChangeTopic(inputValue.trim());
    }

    return (
        <div className="search-container"> 
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Search topic"
                    onChange = { onInputChange }
                /> 
            </form>
        </div>
        
    )

}

SearchBar.propTypes = {
    onChangeTopic: PropTypes.func.isRequired
}