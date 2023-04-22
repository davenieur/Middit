import { topics } from '../../helpers/getIcons';
import { NavButton } from '../NavButton/NavButton';

export const NavBar = ({ onChangeTopic }) =>{

    const handleClick = topic => {
        onChangeTopic(topic);
    }

    return( 
        <nav>
            <h5>HOME</h5>
            <NavButton topic = 'Popular' handleClick = {handleClick} iconName = 'fire-element.png' />
            <hr />
            <h5>FEEDS</h5>
            { 
                topics.map((topic, index)=> {
                    return(
                        <NavButton 
                            topic = {topic.name}
                            handleClick = {handleClick} 
                            iconName = {topic.iconName} 
                            key = {index}
                        />
                    )
                
                })
            }
           
        </nav>
    )
}