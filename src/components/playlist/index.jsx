import PlaylistTopNav from "./components/PlaylistTopNav"

import "./styles/playlist-page.css"

function Playlist({ setToken }) {

    return (
        <div className="scrollbar-playlist">
            <section className="playlist-page--container grid">
                <PlaylistTopNav setToken={setToken} />
                <div className="playlist-page--banner">playlist banner</div>
                <div className="playlist-page--sub-container grid">sub container</div>
            </section>
        </div>
    )
}

export default Playlist