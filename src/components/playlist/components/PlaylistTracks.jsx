import TimeIcon from "../../../assets/svgs/main-app/time.svg"
import GrayHeart from "../../../assets/svgs/main-app/heart-gray.svg"
import GreenHeart from "../../../assets/svgs/main-app/heart-green.svg"
import MenuDots from "../../../assets/svgs/main-app/menu-dots.svg"
import calcTrackTime from "../../../shared-functions/calcTrackTime"
import formatDate from "../../../shared-functions/formatDate"
import PlayButton from "../../../assets/svgs/main-app/play-triangle.svg"
import GetTrackArtists from "../../../shared-functions/GetTrackArtists"
import fixLengthSearch from "../../../shared-functions/fixedLengthSearch"

import "../styles/playlist-tracks.css"

function PlaylistTracks({ playlistTracks }) {
    return (
        <div className="playlist-page--tracks grid">
            <div className="playlist-page--tracks-headers grid">
                <p className="tracks-header--number">#</p>
                <p className="tracks-header--title">Title</p>
                <p className="tracks-header--album">Album</p>
                <p className="tracks-header--date-added">Date Added</p>
                <img className="tracks-header--time" src={TimeIcon} alt="time icon" />
            </div>
            <div className="playlist-page--tracks-tracks grid">
                {playlistTracks.map((track, index) =>
                    <div className="playlist-page--single-track grid" tabIndex={1} key={track.track.id}>
                        <div className="playlist-page--track-num-container">
                            <div className="playlist-page--track-number">{index + 1}</div>
                            <img className="playlist-page--hover-play-btn" src={PlayButton} alt="play button" width={20} />
                        </div>
                        {track.track.album.images.length ?
                            <img className="playlist-page--track-img" src={track.track.album.images[0].url} alt="album img" />
                            : <div></div>
                        }
                        <div className="playlist-page--track-name-container grid">
                            <div className="playlist-page--track-name">{fixLengthSearch(track.track.name)}</div>
                            <div className="playlist-page--playlist-sub-container grid">
                                <div className="playlist-page--explicit-container grid">{track.track.explicit ? <><p className="playlist-page--explicit-track">E</p></> : null}</div>
                                <div className="playlist-page--playlist-name-container grid">
                                    {GetTrackArtists(track.track)}
                                </div>
                            </div>
                        </div>
                        <img className="playlist-page--hide-like" src={GrayHeart} alt="gray heart"></img>
                        <div className="playlist-page--track-time">{calcTrackTime(track.track.duration_ms)}</div>
                        <img className="playlist-page--track-dots" src={MenuDots} alt="menu dots" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default PlaylistTracks