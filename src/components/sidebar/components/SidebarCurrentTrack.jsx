import "../styles/sidebar-current-track.css"

function SidebarCurrentTrack({ currentTrack }) {

    return (
        <div className="sidebar--current-track-container grid">
            <img className="sidebar--current-track-img" src={currentTrack.trackImage} alt="current track img" />
            <div className="sidebar--current-track-name">{currentTrack.trackName}</div>
            <div className="sidebar--current-track-artist">{currentTrack.trackArtist}</div>
        </div>
    )
}

export default SidebarCurrentTrack