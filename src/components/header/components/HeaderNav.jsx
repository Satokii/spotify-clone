import { NavLink } from "react-router-dom";

import "../styles/header-nav.css";

function HeaderNav() {
  const toggleActiveHeaderNav = ({ isActive }) =>
    isActive ? "active-header-nav" : "flip-animate";

  return (
    <nav className="header--nav-container">
      <ul className="header--nav-list grid">
        <li>
          <NavLink className={toggleActiveHeaderNav} to="/">
            <span data-hover='Home'>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={toggleActiveHeaderNav} to="/new-releases">
            <span data-hover='New Releases'>New Releases</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={toggleActiveHeaderNav} to="/profile">
          <span data-hover='Profile'>Profile</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={toggleActiveHeaderNav} to="/about">
          <span data-hover='About'>About</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
