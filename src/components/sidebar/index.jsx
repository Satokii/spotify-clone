import SidebarCurrentTrack from "./components/SidebarCurrentTrack"
import SidebarAboutArtist from "./components/SidebarAboutArtist"

import "./styles/sidebar.css"

function Sidebar({ token, currentTrack }) {

    return (
        <section className="sidebar grid">
            <SidebarCurrentTrack currentTrack={currentTrack} />
            <SidebarAboutArtist token={token} currentTrack={currentTrack} />
            <div>New in queue</div>
        </section>
    )
}

export default Sidebar