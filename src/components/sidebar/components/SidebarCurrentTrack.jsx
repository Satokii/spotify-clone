import { Link } from "react-router-dom"
import scrollToTop from "../../../shared-functions/scrollToTop"

import "../styles/sidebar-current-track.css"

function SidebarCurrentTrack({ currentTrack }) {

    return (
        <div className="sidebar--current-track-container grid">
            <Link to={`/album/${currentTrack.albumId}/${currentTrack.artistId}`} onClick={scrollToTop}>
                <img className="sidebar--current-track-img" src={currentTrack.trackImage} alt="current track img" />
            </Link>
            <Link className="sidebar--current-track-name" to={`/album/${currentTrack.albumId}/${currentTrack.artistId}`} onClick={scrollToTop}>{currentTrack.trackName}</Link>
            <Link className="sidebar--current-track-artist" to={`/artist/${currentTrack.artistId}`} onClick={scrollToTop}>{currentTrack.trackArtist}</Link>
        </div>
    )
}

export default SidebarCurrentTrack