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
            {notPlaying ? <div className="main-playback--no-track-playing grid">No track playing</div> :
            <>
                {currentTrack.map((track, index) =>
                    <div className="main-playback--cur-playing-item grid" key={`${track.id}-${index}`}>
                        {track.album.images.length ? <img className={togglePulse()} src={track.album.images[0].url} alt={`${track.name}-image`} /> : <div>No Image</div>}
                        <div className="main-playback--cur-playing-details">
                            <p className="main-playback--cur-playing-title">{track.name}</p>
                            <p className="main-playback--cur-playing-artist">{track.artists[0].name}</p>
                        </div>
                    </div>
                )}
            </>
            }
        </>
    )
}

export default CurrentlyPlayingTrack