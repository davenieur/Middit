import { topics } from '../../data/data';

export const NavBar = () =>{
 
    return( 
        <nav>
            <h1>Middit</h1>
            <ul id="nav-list">
                { 
                    topics.map(topic => {
                        return(
                            <div className='nav-topic'>
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