import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

export const SearchBar = ({ onChangeTopic }) => {
    const [ inputValue, setInputValue ] = useState('');
    const navigate = useNavigate();

    const onInputChange = e => {
        setInputValue(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        onChangeTopic(inputValue.trim());
        setInputValue('');
        navigate(`/${inputValue}`);
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