import TimeIcon from "../../../assets/svgs/main-app/time.svg"

import "../styles/album-tracks.css"

function AlbumTracks({ albumTracksArr, albumInfo, artistInfo }) {

    return (
        <div className="album-page--tracks grid">
            <div className="album-page--tracks-headers grid">
                <p className="tracks-header--number">#</p>
                <p className="tracks-header--title">Title</p>
                <img className="tracks-header--time" src={TimeIcon} alt="time icon" />
            </div>
            <div className="album-page--tracks-tracks">
                {albumTracksArr.map((track, index) =>
                    <div key={track.id}>
                        <div className="album-page--track-number">{index + 1}</div>
                        <div className="album-page--track-name-container">
                            <div className="album-page--track-name">{track.name}</div>
                            <div className="album-page--artist-name-container">
                                <div>{track.explicit ? "yes" : "No"}</div>
                                {track.artists.map(artist =>
                                <div className="album-page--artist-name" key={artist.id}>{artist.name}</div>    
                                )}
                            </div>
                        </div>
                        <div>Like</div>
                        <div>{track.duration_ms}</div>
                        <div>Dots</div>
                    </div>
                )}
                <img src="" alt="" />
            </div>
            <div className="album-page--tracks-copyrights"></div>
        </div>
    )
}

export default AlbumTracks