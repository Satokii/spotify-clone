import { Link } from "react-router-dom"
import scrollToTop from "../../../shared-functions/scrollToTop"
import TimeIcon from "../../../assets/svgs/main-app/time.svg"
import GreenHeart from "../../../assets/svgs/main-app/heart-green.svg"
import MenuDots from "../../../assets/svgs/main-app/menu-dots.svg"
import calcTrackTime from "../../../shared-functions/calcTrackTime"
import PlayButton from "../../../assets/svgs/main-app/play-triangle.svg"
import GetTrackArtists from "../../../shared-functions/GetTrackArtists"
import fixLengthSearch from "../../../shared-functions/fixedLengthSearch"
import fixLengthPreviews from "../../../shared-functions/fixLengthPreviews"
import formatDateShortMths from "../../../shared-functions/formatDateShortMths"

import "../styles/liked-songs-tracks.css"

function LikedSongsTracks({ likedSongs }) {

    return (
        <div className="liked-songs--tracks grid">
            <div className="liked-songs--tracks-headers grid">
                <p className="liked-tracks-header--number">#</p>
                <p className="liked-tracks-header--title">Title</p>
                <p className="liked-tracks-header--album">Album</p>
                <p className="liked-tracks-header--date-added">Date Added</p>
                <img className="liked-tracks-header--time" src={TimeIcon} alt="time icon" />
            </div>
            <div className="liked-songs--tracks-tracks grid">
                {likedSongs.map((track, index) =>
                    <div className="liked-songs--single-track grid" tabIndex={1} key={track.track.id}>
                        <div className="liked-songs--track-num-container">
                            <div className="liked-songs--track-number">{index + 1}</div>
                            <img className="liked-songs--hover-play-btn" src={PlayButton} alt="play button" width={20} />
                        </div>
                        {track.track.album.images.length ?
                            <img className="liked-songs--track-img" src={track.track.album.images[0].url} alt="album img" />
                            : <div></div>
                        }
                        <div className="liked-songs--track-name-container grid">
                            <Link className="liked-songs--track-name" to={`/album/${track.track.album.id}/${track.track.artists[0].id}`} onClick={scrollToTop}>{fixLengthSearch(track.track.name)}</Link>
                            <div className="liked-songs--playlist-sub-container grid">
                                <div className="liked-songs--explicit-container grid">{track.track.explicit ? <><p className="liked-songs--explicit-track">E</p></> : null}</div>
                                <div className="liked-songs--playlist-name-container grid">
                                    {GetTrackArtists(track.track)}
                                </div>
                            </div>
                        </div>
                        <Link className="liked-songs--album-name" to={`/album/${track.track.album.id}/${track.track.artists[0].id}`} onClick={scrollToTop}>{fixLengthPreviews(track.track.album.name)}</Link>
                        <div className="liked-songs--date-added">{formatDateShortMths(track.added_at)}</div>
                        <img className="liked-songs--like" src={GreenHeart} alt="green heart"></img>
                        <div className="liked-songs--track-time">{calcTrackTime(track.track.duration_ms)}</div>
                        <img className="liked-songs--track-dots" src={MenuDots} alt="menu dots" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default LikedSongsTracks