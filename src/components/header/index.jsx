import Logo from "./components/Logo";
import LoginLogout from "./components/LoginLogout";

import "./styles/header.css";

function Header({ token, setToken }) {

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
      <LoginLogout token={token} setToken={setToken} />
    </header>
  );
}

export default Header;
