import TimeIcon from "../../../assets/svgs/main-app/time.svg"

import "../styles/album-tracks.css"

function AlbumTracks() {

    return (
        <div className="album-page--tracks grid">
            <div className="album-page--tracks-headers grid">
                <p className="tracks-header--number">#</p>
                <p className="tracks-header--title">Title</p>
                <img className="tracks-header--time" src={TimeIcon} alt="time icon" />
            </div>
            <div className="album-page--tracks-tracks"></div>
            <div className="album-page--tracks-copyrights"></div>
        </div>
    )
}

export default AlbumTracks