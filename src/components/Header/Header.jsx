import { useState } from "react";
import { SearchBar } from "../SearchBar/SearchBar";

export const Header = () =>{
    const [ topic, setTopic ] = useState(null);

    const onChangeTopic = topic => {
        setTopic(topic);
    }

    return( 
        <header>
            <img src="" alt="Reddit icon" />
            <SearchBar onChangeTopic = { onChangeTopic }/>
        </header>
    )
}