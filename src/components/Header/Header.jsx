import { SearchBar } from "../SearchBar/SearchBar";

export const Header = ( { onChangeTopic }) => {
    return(
        <header>
          <a href="/">
            <img src="https://img.icons8.com/material/48/EAEAEA/reddit.png" alt="Reddit icon"/>
          </a>
          <SearchBar 
              onChangeTopic = { onChangeTopic }
          />
        </header>
    );
}