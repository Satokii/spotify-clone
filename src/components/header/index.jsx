import Authorisation from "../../Authorisation";
import Logout from "../../Logout";
import Logo from "./components/Logo";

import "./styles/header.css";

function Header({ token, setToken }) {
  const logout = () => {
    Logout(setToken);
    window.localStorage.removeItem("token");
  };

  return (
    <header className="header grid">
      <Logo />
      <section className="profile-container">Profile</section>
      <section className="login-container">
        {!token ? <Authorisation /> : <p onClick={logout}>Logout</p>}
      </section>
    </header>
  );
}

export default Header;
