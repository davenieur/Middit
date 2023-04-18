import { useState } from "react";
import PropTypes from 'prop-types';

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
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Search topic"
                value = { inputValue }
                onChange = { onInputChange }
            /> 
        </form>
    )

}

SearchBar.propTypes = {
    onChangeTopic: PropTypes.func.isRequired
}