import { Link } from "react-router-dom"
import scrollToTop from "../../shared-functions/scrollToTop"

import "./styles/now-playing.css"

function NowPlaying({ currentTrack }) {
    
    return (
        <section className="now-playing--container grid">
            <div className="now-playing--img">
                {currentTrack.trackImageLength ? <img src={currentTrack.trackImage} alt={`${currentTrack.trackName}-image`} /> : <div></div>}
            </div>
            <div className="now-playing--text-container grid">
                <div className="now-playing--track-name-container">
                    <Link className="now-playing--track-name" to={`/album/${currentTrack.albumId}/${currentTrack.artistId}`} onClick={scrollToTop} >{currentTrack.trackName}</Link>
                </div>
                <Link className="now-playing--artist-name" to={""}>{currentTrack.trackArtist}</Link>
                <p></p>
            </div>
        </section>
    )
}

export default NowPlaying