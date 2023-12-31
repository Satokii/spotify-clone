import Logo from "./components/Logo";
import HeaderSearchBar from "./components/HeaderSearchBar";
import HeaderNav from "./components/HeaderNav";
import LoginLogout from "./components/LoginLogout";

import "./styles/header.css";

function Header({ token, setToken, setTrackResults, setTrackTotal, setArtistResults, setArtistTotal, setAlbumResults, setAlbumTotal }) {

  return (
    <header className="header grid">
      <Logo />
      <HeaderSearchBar token={token} setTrackResults={setTrackResults} setTrackTotal={setTrackTotal} setArtistResults={setArtistResults} setArtistTotal={setArtistTotal} setAlbumResults={setAlbumResults} setAlbumTotal={setAlbumTotal} />
      <HeaderNav />
      <LoginLogout token={token} setToken={setToken} />
    </header>
  );
}

export default Header;
