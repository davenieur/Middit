import {Link} from 'react-router-dom';

export const NotFound = ({ inputValue }) => {
    return(
        <main>
             <h1>404 - Not Found!</h1>
            <Link to="/">Go Home</Link>
        </main>
        

    )
}