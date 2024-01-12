import PlayButton from "../../../assets/svgs/main-app/play-triangle.svg"

import "../styles/artist-popular-tracks.css"

function ArtistPopularTracks({ topTrackArr }) {
    console.log(topTrackArr)

    return (
        <div className="artist-page--popular-tracks grid">
            <h2 className="artist--tracks-header">Popular</h2>
            <div className="artist--tracks-tracks grid">
                {topTrackArr.map((track, index) =>
                    <div className="artist-page--single-track grid" key={track.id} tabIndex={1}>
                        <div className="artist-page--track-number">{index + 1}</div>
                        <img className="artist-page--hover-play-btn" src={PlayButton} alt="play button" width={20} />
                        {track.album.images.length ? 
                        <img className="artist-page--track-img" src={track.album.images[0].url} alt="track image"/>
                        : <div className="artist-page--track-img"></div> }
                        <div className="artist-page--track-name">{track.name}</div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ArtistPopularTracks