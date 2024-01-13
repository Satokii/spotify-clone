import SidebarCurrentTrack from "./components/SidebarCurrentTrack"

import "./styles/sidebar.css"

function Sidebar({ currentTrack }) {

    return (
        <section className="sidebar grid">
            <SidebarCurrentTrack currentTrack={currentTrack} />
            <div>About Artist</div>
            <div>New in queue</div>
        </section>
    )
}

export default Sidebar