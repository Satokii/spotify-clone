import SidebarCurrentTrack from "./components/SidebarCurrentTrack"
import SidebarAboutArtist from "./components/SidebarAboutArtist"

import "./styles/sidebar.css"

function Sidebar({ token, currentTrack }) {

    return (
        <div className="scrollbar-sidebar">
        <section className="sidebar grid">
            <SidebarCurrentTrack currentTrack={currentTrack} />
            <SidebarAboutArtist token={token} currentTrack={currentTrack} />
            <div>Next in queue</div>
        </section>
        </div>
    )
}

export default Sidebar