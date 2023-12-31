import { Link } from "react-router-dom";
import SpotifyLogo from "../../../assets/svgs/spotify-logo.svg";

import "../styles/logo.css"

function Logo() {
  return (
    <section className="logo--container grid">
      <Link className="logo--link-container grid" to="/">
        <img className="logo--img" src={SpotifyLogo} alt="spotify logo" />
        <h1 className="logo--text">Spoti-facts</h1>
      </Link>
    </section>
  );
}

export default Logo;
