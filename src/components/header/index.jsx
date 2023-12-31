import Authorisation from "../../Authorisation";
import Logout from "../../Logout";
import Logo from "./components/Logo";

import "./styles/header.css";
import "./styles/login-logout.css"

function Header({ token, setToken }) {
  const logout = () => {
    Logout(setToken);
    window.localStorage.removeItem("token");
  };

  return (
    <header className="header grid">
      <Logo />
      <section className="header--search">Search</section>
      <section className="header--nav">
        <ul>
          <li>New Releases</li>
          <li>Profile</li>
          <li>About</li>
        </ul>
      </section>
      <section className="profile-container">Profile</section>
      <section className="header--login-logout-container">
        {!token ? <Authorisation /> : <p className="header--logout-link" onClick={logout}>Logout</p>}
      </section>
    </header>
  );
}

export default Header;
