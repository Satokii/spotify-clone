import "../../styles/main-playback/currently-playing-track.css"

function CurrentlyPlayingTrack({ currentTrack}) {

    return (
        <>
        {currentTrack.map((track, index) =>
            <div className="main-playback--cur-playing-item grid" key={`${track.id}-${index}`}>
                {track.album.images.length ? <img src={track.album.images[0].url} alt={`${track.name}-image`} /> : <div>No Image</div>}
                <div className="main-playback--cur-playing-details">
                    <p className="main-playback--cur-playing-title">{track.name}</p>
                    <p className="main-playback--cur-playing-artist">{track.artists[0].name}</p>
                </div>
            </div>
        )}
        </>
    )
}

export default CurrentlyPlayingTrack