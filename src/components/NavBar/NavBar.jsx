import { topics } from '../../data/data';


export const NavBar = () =>{
 
    return( 
        <nav>
            <h4>FEEDS</h4>
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