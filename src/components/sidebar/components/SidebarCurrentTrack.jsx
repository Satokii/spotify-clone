import "../styles/sidebar-current-track.css"

function SidebarCurrentTrack({ currentTrack }) {

    return (
        <div className="sidebar--current-track grid">
            <img src={currentTrack.trackImage} alt="current track img" />
            <div>{currentTrack.trackName}</div>
            <div>{currentTrack.trackArtist}</div>
        </div>
    )
}

export default SidebarCurrentTrack