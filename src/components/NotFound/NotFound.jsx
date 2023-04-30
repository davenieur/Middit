import { useNavigate } from 'react-router-dom';
import { SearchBar } from '../SearchBar/SearchBar';

export const NotFound = ({ inputValue }) => {
    const navigate = useNavigate();

    return(
        <main className='notFound'>
            <img src="https://img.icons8.com/ios-filled/250/FFC5F0/sad.png" alt="sad face"/>
            <h1>NO RESULTS FOUND</h1>
            <SearchBar />
            <button className="btn go-back" onClick={() => navigate(-1)}>GO BACK</button>
        </main>
    )
}