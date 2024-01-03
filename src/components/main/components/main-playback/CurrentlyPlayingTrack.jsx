import "../../styles/main-playback/currently-playing-track.css"

function CurrentlyPlayingTrack({ currentTrack, notPlaying, pulse }) {

    const togglePulse = () => {
        if (pulse) {
            return "main-playback--pulse-img"
        }
        else return ""
    } 

    // console.log(currentTrack)

    return (
        <>
            {notPlaying ? <div className="main-playback--no-track-playing grid">Play a song on Spotify</div> :
            <>
                {/* {currentTrack.map((track, index) =>
                    <div className="main-playback--cur-playing-item grid" key={`${track.id}-${index}`}>
                        {track.album.images.length ? <img className={togglePulse()} src={track.album.images[0].url} alt={`${track.name}-image`} /> : <div>No Image</div>}
                        <div className="main-playback--cur-playing-details">
                            <p className="main-playback--cur-playing-title">{track.name}</p>
                            <p className="main-playback--cur-playing-artist">{track.artists[0].name}</p>
                        </div>
                    </div>
                )} */}
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