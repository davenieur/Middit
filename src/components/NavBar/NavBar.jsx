import { useState } from 'react';
import { topics } from '../../helpers/getIcons';
import { NavItem } from '../NavItem/NavItem';


export const NavBar = ({ onChangeTopic }) =>{
    const [ selectedTopic, setSelectedTopic ] = useState('popular');

    const handleClick = topic => {
        setSelectedTopic(topic);
        onChangeTopic(selectedTopic);
    }

    return( 
        <nav>
            <h4>FEEDS</h4>
            <hr />
            { 
                topics.map((topic, index )=> {
                    return(
                        <NavItem 
                            {... topic }
                            handleClick = {handleClick}
                            key={index}
                        />
                    )   
                })
            }
         
        </nav>
    )
}