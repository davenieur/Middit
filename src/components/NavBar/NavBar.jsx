import { topics } from '../../helpers/getIcons';
import { NavItem } from '../NavItem/NavItem';


export const NavBar = () =>{
 
    return( 
        <nav>
            <h4>FEEDS</h4>
            <hr />
            { 
                topics.map((topic, index )=> {
                    return(
                        <NavItem 
                            {... topic }
                            key={index}
                        />
                    )   
                })
            }
         
        </nav>
    )
}