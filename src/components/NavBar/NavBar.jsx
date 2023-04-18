import { topics } from '../../data/data';

export const NavBar = () =>{
 
    return( 
        <nav>
            <ul id="nav-list">
                { 
                    topics.map((topic, index )=> {
                        return(
                            <div className='nav-topic' key = {index}> 
                                <a href={topic.url}>
                                    <li>{topic.name}</li>
                                </a>
                            </div>  
                        )   
                    })
                }
            </ul>
        </nav>
    )
}