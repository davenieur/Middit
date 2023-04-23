import { SearchBar } from "../SearchBar/SearchBar";
import PropTypes from 'prop-types';

export const Header = ( { onChangeTopic } ) => {
    return(
        <header>
          <a href="/" className="header__logo-box">
            <img src="https://img.icons8.com/material/48/EAEAEA/reddit.png" alt="Reddit icon" className="header__logo"/>
          </a>

          <SearchBar 
              onChangeTopic = { onChangeTopic }
          />
        </header>
    );
}

Header.propTypes = {
  onChangeTopic: PropTypes.func.isRequired
}

