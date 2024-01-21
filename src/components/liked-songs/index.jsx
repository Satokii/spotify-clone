import LikedSongsTopNav from "./components/LikedSongsTopNav"

import "./styles/liked-songs.css"

function LikedSongs({ token, setToken }) {

    return (
        <div className="scrollbar-liked-songs">
        <section className="liked-songs--container grid">
            <LikedSongsTopNav setToken={setToken} />
            <div>Banner</div>
            <div className="liked-songs--sub-container grid">
                <div>controls</div>
                <div>tracks</div>
            </div>
        </section>
        </div>
    )
}

export default LikedSongs