import { NavLink } from "react-router-dom";

import "../styles/header-nav.css";

function HeaderNav() {
  const toggleActiveHeaderNav = ({ isActive }) =>
    isActive ? "active-header-nav" : "inactive-header-nav";

  return (
    <nav className="header--nav-container">
      <ul className="header--nav-list grid">
        <li>
          <NavLink className={toggleActiveHeaderNav} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={toggleActiveHeaderNav} to="/new-releeases">
            New Releases
          </NavLink>
        </li>
        <li>
          <NavLink className={toggleActiveHeaderNav} to="/profile">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink className={toggleActiveHeaderNav} to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
