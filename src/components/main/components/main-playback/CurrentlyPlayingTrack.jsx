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
                        {currentTrack.trackImageLength ? <img className={togglePulse()} src={currentTrack.trackImage} alt={`${currentTrack.trackName}-image`} /> : <div>No Image</div>}
                        <div className="main-playback--cur-playing-details">
                            <p className="main-playback--cur-playing-title">{currentTrack.trackName}</p>
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