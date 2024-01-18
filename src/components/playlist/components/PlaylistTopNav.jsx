import MainNav from "../../main-nav"

import "../styles/playlist-top-nav.css"

function PlaylistTopNav({ setToken }) {

    return (
        <div className="playlist-page--menu-backing">
        <section className="playlist-page--menu-container grid">
            <MainNav setToken={setToken} />
        </section>
        </div>
    )
}
export default PlaylistTopNav