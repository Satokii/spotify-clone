import SidebarCurrentTrack from "./components/SidebarCurrentTrack"
import SidebarAboutArtist from "./components/SidebarAboutArtist"

import "./styles/sidebar.css"

function Sidebar({ token, currentTrack, currentTrackArtists }) {

    return (
        <div className="sidebar-outer-container grid">
            <div className="scrollbar-sidebar">
                <section className="sidebar grid">
                    <SidebarCurrentTrack currentTrack={currentTrack} currentTrackArtists={currentTrackArtists} />
                    <SidebarAboutArtist token={token} currentTrack={currentTrack} />
                    <div>Next in queue</div>
                </section>
            </div>
        </div>
    )
}

export default Sidebar