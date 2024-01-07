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
            <div className="album-page--tracks-tracks grid">
                {albumTracksArr.map((track, index) =>
                    <div className="album-page--single-track grid" key={track.id}>
                        <div className="album-page--track-number">{index + 1}</div>
                        <div className="album-page--track-name-container grid">
                            <div className="album-page--track-name">{track.name}</div>
                            <div className="album-page--artist-sub-container grid">
                                <div className="album-page--explicit-container grid">{track.explicit ? <><div className="album-page--explicit-track">E</div></> : null}</div>
                                <div className="album-page--artist-name">
                                    {track.artists.map(artist => artist.name).join(", ")}
                                </div>
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