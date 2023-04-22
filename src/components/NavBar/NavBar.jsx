import { topics } from '../../helpers/getIcons';

export const NavBar = ({ onChangeTopic }) =>{

    const handleClick = topic => {
        onChangeTopic(topic);
    }

    return( 
        <nav>
            <h5>HOME</h5>
            <button type='button' className='btn btn--nav' onClick={e => handleClick('popular')}>
                <img src='https://img.icons8.com/glyph-neue/EAEAEA/32/fire-element.png' alt="Popular topics"/>
                <p>More topics</p>
            </button>
            <hr />
            <h5>FEEDS</h5>

            { 
                topics.map((topic, index)=> {
                    return(
                        <button 
                            type="button" 
                            className='btn btn--nav' 
                            onClick={e => handleClick(topic.name)}
                            key = { index }
                        >
                            <img src={topic.icon} alt={topic.name} />
                            <p>{topic.name}</p>
                        </button>
                    )
                
                })
            }

            <button type='button' className='btn btn--nav' onClick={e => console.log('More topics')}>
                <img src='https://img.icons8.com/glyph-neue/EAEAEA/32/circled-chevron-down.png' alt="More Topics"/>
                <p>More topics</p>
            </button>

         
        </nav>
    )
}