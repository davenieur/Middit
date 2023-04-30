import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
    const [ inputValue, setInputValue ] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => {
        navigate('/popular');
    }, []);


    const onInputChange = e => {
        setInputValue(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
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
