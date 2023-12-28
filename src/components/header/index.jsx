import Authorisation from "../../Authorisation";
import "./styles/header.css";

function Header({ token, setToken }) {

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <header className="header grid">
      <section className="logo-container">My Spotify Stats</section>
      <section className="profile-container">Profile</section>
      <section className="login-container">
        {!token ? <Authorisation /> : <p onClick={logout}>Logout</p>}
      </section>
    </header>
  );
}

export default Header;
