import { Link } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";

export const Header =  () => {
    return(
        <header>
          <Link to="/popular">
            <img src="https://img.icons8.com/material/48/EAEAEA/reddit.png" alt="Middit icon"/>
          </Link>
          <SearchBar />
        </header>
    );
}