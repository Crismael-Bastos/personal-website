import { useState, useContext } from 'react';
import HamburgerIcon from '../hamburguer-icon';
import CloseIcon from '../close-icon';
import sunIcon from '../../assets/sun.png';
import moonIcon from '../../assets/moon.png';
import { ThemeContext } from '../../contexts/themeContext';
import { NavLink } from 'react-router-dom';
import './index.css';

const Nav = ({ device }) => {
  return (
    <nav className={`nav-${device}`}>
      <ul className="nav-links">
        <li>
          <NavLink to="/personal-website/sobre">Sobre</NavLink>
        </li>
        <li>
          <NavLink to="/personal-website/projetos">Projetos</NavLink>
        </li>
      </ul>
    </nav>
  );
};

const Header = () => {
  const [hamburgerToggle, setHamburgerToggle] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <div className="toggle-theme-container">
        <NavLink className={'link-logo'} to='/personal-website/'>
          <div className="logo">Crismael Bastos</div>
        </NavLink>
        <img
          className={`theme-icon invert-color ${
            theme === 'theme-dark' ? 'hidden' : ''
          }`}
          src={moonIcon}
          onClick={toggleTheme}
        />
        <img
          className={`theme-icon invert-color ${
            theme !== 'theme-dark' ? 'hidden' : ''
          }`}
          src={sunIcon}
          onClick={toggleTheme}
        />
      </div>
      <HamburgerIcon
        theme={theme}
        className={`hamburger-icon invert-color ${hamburgerToggle ? 'hidden' : ''}`}
        onClick={() => {
          setHamburgerToggle(true);
        }}
      />
      <Nav device={'pc'} />

      {hamburgerToggle && (
        <div className="menu-container">
          <CloseIcon
            theme={theme}
            className="close-icon icon"
            onClick={() => {
              setHamburgerToggle(false);
            }}
          />
          <Nav device={'mobile'} />
        </div>
      )}
    </header>
  );
};

export default Header;
