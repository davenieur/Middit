import { Link } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";

export const Header =  () => {
    return(
        <header>
          <Link to="/popular" className="header__logo-box">
            <img src="https://img.icons8.com/material/48/EAEAEA/reddit.png" alt="Reddit icon" className="header__logo"/>
          </Link>
          <SearchBar />
        </header>
    );
}