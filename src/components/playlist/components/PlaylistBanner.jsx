import { Link } from "react-router-dom";
import scrollToTop from "../../../shared-functions/scrollToTop";
import getYear from "../../../shared-functions/getYear";
import convertMsToTime from "../../../shared-functions/convertMsToTime";
import albumTimeinMs from "../../../shared-functions/albumTimeinMs";

// import "../styles/album-banner.css"
import "../styles/playlist-banner.css"

function PlaylistBanner({ playlistInfo, playlistTracks }) {
  return (
    <div className="playlist-page--banner grid" style={{ backgroundImage: `url(${playlistInfo.img})`, backgroundPosition: "50% 30%", backgroundRepeat: "no-repeat", backgroundSize: "80%"}}>
        <div className="playlist-page--playlist-type">{playlistInfo.type}</div>
        <div className="playlist-page--playlist-name">{playlistInfo.name}</div>
        <div className="playlist-page--playlist-description">{playlistInfo.description}</div>
        <div className="playlist-page--playlist-overview-container grid">
            <p className="playlist-page--playlist-owner">{playlistInfo.owner}</p>
            <span className="middot">&middot;</span>
            <p>{`${playlistInfo.followers} likes`}</p>
            <span className="middot">&middot;</span>
            <p className="playlist-overview-total-tracks">{`${playlistInfo.totalTracks} songs, ${convertMsToTime(albumTimeinMs(playlistTracks))}`}</p>
        </div>
    </div>
  );
}

export default PlaylistBanner;
