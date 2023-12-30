import Authorisation from "../../Authorisation";
import Logout from "../../Logout";
import SpotifyLogo from "../../assets/svgs/spotify-logo.svg"

import "./styles/header.css";

function Header({ token, setToken }) {

  const logout = () => {
    Logout(setToken)
    window.localStorage.removeItem("token");
  };

  return (
    <header className="header grid">
      <section className="logo--container grid">
        <img className="logo--img" src={SpotifyLogo} alt="spotify logo" />
        <h1 className="logo--text">Spoti-facts</h1>
      </section>
      <section className="profile-container">Profile</section>
      <section className="login-container">
        {!token ? <Authorisation /> : <p onClick={logout}>Logout</p>}
      </section>
    </header>
  );
}

export default Header;
