import { Link } from "react-router-dom"
import scrollToTop from "../../../../shared-functions/scrollToTop"
import "../../styles/main-playback/currently-playing-track.css"

function CurrentlyPlayingTrack({ currentTrack, notPlaying, pulse }) {

    const togglePulse = () => {
        if (pulse) {
            return "main-playback--pulse-img"
        }
        else return ""
    } 

    return (
        <>
            {notPlaying ? <div className="main-playback--no-track-playing grid">Play a song on Spotify</div> :
            <>
                 {
                    <div className="main-playback--cur-playing-item grid" id={currentTrack.trackId} >
                        {currentTrack.trackImageLength ? <Link to={`/album/${currentTrack.albumId}/${currentTrack.artistId}`} onClick={scrollToTop}><img className={togglePulse()} src={currentTrack.trackImage} alt={`${currentTrack.trackName}-image`} /></Link> : <div></div>}
                        <div className="main-playback--cur-playing-details grid">
                            <Link className="main-playback--cur-playing-title" to={`/album/${currentTrack.albumId}/${currentTrack.artistId}`} onClick={scrollToTop}>{currentTrack.trackName}</Link>
                            <p className="main-playback--cur-playing-artist">{currentTrack.trackArtist}</p>
                        </div>
                    </div>
                }
            </>
            }
        </>
    )
}

export default CurrentlyPlayingTrack