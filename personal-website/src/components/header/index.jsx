import { useState, useContext } from 'react';
import './index.css';
import HamburgerIcon from '../hamburguer-icon';
import CloseIcon from '../close-icon';
import sunIcon from '../../assets/sun.png';
import moonIcon from '../../assets/moon.png';
import { ThemeContext } from '../../contexts/themeContext';
import { NavLink, useNavigate } from 'react-router-dom';

const Nav = ({ device }) => {
  return (
    <nav className={`nav-${device}`}>
      <ul className="nav-links">
        <li>
          <NavLink to="/sobre" >Sobre</NavLink>
        </li>
        <li>
          <NavLink to="/projetos" >Projetos</NavLink>
        </li>
      </ul>
    </nav>
  );
};

const Header = () => {
  const [hamburgerToggle, setHamburgerToggle] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <header>

      <div className="toggle-theme-container">
      <div className="logo" onClick={() => navigate('/')}>
        Crismael Bastos
      </div>
      <img
          className={`theme-icon icon ${theme === 'theme-dark' ? 'hidden' : ''}`}
          src={moonIcon}
          onClick={toggleTheme}
        />
        <img
          className={`theme-icon icon ${theme !== 'theme-dark' ? 'hidden' : ''}`}
          src={sunIcon}
          onClick={toggleTheme}
        />
      </div>
      <HamburgerIcon
        theme={theme}
        className={`hamburger-icon icon ${hamburgerToggle ? 'hidden' : ''}`}
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
