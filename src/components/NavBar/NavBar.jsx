import { useNavigate } from "react-router-dom";
import { topics } from '../../helpers/getIcons';
import { NavButton } from '../NavButton/NavButton';

export const NavBar = () =>{
    const navigate = useNavigate();

    const handleClick = topic => {
        navigate(`/${topic}`);
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