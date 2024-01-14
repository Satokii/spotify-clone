import { Link } from "react-router-dom"
import scrollToTop from "../../../shared-functions/scrollToTop"
import fixLengthPreviews from "../../../shared-functions/fixLengthPreviews"

import "../styles/sidebar-current-track.css"

function SidebarCurrentTrack({ currentTrack }) {

    return (
        <div className="sidebar--current-track-container grid">
            <Link className="sidebar--current-track-img-container" to={`/album/${currentTrack.albumId}/${currentTrack.artistId}`} onClick={scrollToTop}>
                <div>
                {currentTrack.trackImage ?
                    <img className="sidebar--current-track-img" src={currentTrack.trackImage} alt="current track img" />
                    : <div>Play a song on Spotify</div>
                }
                </div>
            </Link>
            <Link className="sidebar--current-track-name" to={`/album/${currentTrack.albumId}/${currentTrack.artistId}`} onClick={scrollToTop}>{fixLengthPreviews(currentTrack.trackName)}</Link>
            <Link className="sidebar--current-track-artist" to={`/artist/${currentTrack.artistId}`} onClick={scrollToTop}>{currentTrack.trackArtist}</Link>
        </div>
    )
}

export default SidebarCurrentTrack