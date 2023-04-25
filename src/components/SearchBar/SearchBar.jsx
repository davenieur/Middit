import { useState } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export const SearchBar = ({ onChangeTopic }) => {
    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = e => {
        setInputValue(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        onChangeTopic(inputValue.trim());
        setInputValue('');
    }
    
    return (
        

            <div className="search-container"> 
                    <form onSubmit={onSubmit} className="search__form-container">
                        <input
                            type="text"
                            placeholder="Search topic"
                            onChange = { onInputChange }
                            value = {inputValue}
                        /> 
                    </form>
                    <button  type='button' className="btn btn--search" onClick={onSubmit}> </button>
            </div>

        
    )

}

SearchBar.propTypes = {
    onChangeTopic: PropTypes.func.isRequired
}