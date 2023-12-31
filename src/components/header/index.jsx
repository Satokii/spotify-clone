import Logo from "./components/Logo";
import HeaderSearchBar from "./components/HeaderSearchBar";
import HeaderNav from "./components/HeaderNav";
import LoginLogout from "./components/LoginLogout";

import "./styles/header.css";

function Header({ token, setToken, trackResults, setTrackResults }) {

  return (
    <header className="header grid">
      <Logo />
      <HeaderSearchBar token={token} trackResults={trackResults} setTrackResults={setTrackResults} />
      <HeaderNav />
      <LoginLogout token={token} setToken={setToken} />
    </header>
  );
}

export default Header;
