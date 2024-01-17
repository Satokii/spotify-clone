import { Link } from "react-router-dom";
import convertMsToTime from "../../../shared-functions/convertMsToTime";
import playlistTimeinMs from "../functions/playlistTimeinMs";

import "../styles/playlist-banner.css"

function PlaylistBanner({ playlistInfo, playlistTracks }) {
  console.log(playlistInfo)
  return (
    <div className="playlist-page--banner grid" style={{ backgroundImage: `url(${playlistInfo.img})`, backgroundPosition: "50% 30%", backgroundRepeat: "no-repeat", backgroundSize: "80%"}}>
        {playlistInfo.isPublic ?
            <div className="playlist-page--playlist-type">{`Public ${playlistInfo.type}`}</div>
            : <div className="playlist-page--playlist-type">{playlistInfo.type}</div>
        }
        <div className="playlist-page--playlist-name">{playlistInfo.name}</div>
        <div className="playlist-page--playlist-description">{playlistInfo.description}</div>
        <div className="playlist-page--playlist-overview-container grid">
            <p className="playlist-page--playlist-owner">{playlistInfo.owner}</p>
            <span className="middot">&middot;</span>
            <p className="playlist-page--playlist-likes">{`${playlistInfo.followers} followers`}</p>
            <span className="middot">&middot;</span>
            <p className="playlist-overview-total-tracks"><span className="playlist-overview-song-num">{`${playlistInfo.totalTracks} songs`}</span>{`, ${convertMsToTime(playlistTimeinMs(playlistTracks))}`}</p>
        </div>
    </div>
  );
}

export default PlaylistBanner;
