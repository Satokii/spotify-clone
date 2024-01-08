import { useState } from "react"
import TimeIcon from "../../../assets/svgs/main-app/time.svg"
import GrayHeart from "../../../assets/svgs/main-app/heart-gray.svg"
import GreenHeart from "../../../assets/svgs/main-app/heart-green.svg"
import MenuDots from "../../../assets/svgs/main-app/menu-dots.svg"
import calcTrackTime from "../../../shared-functions/calcTrackTime"
import formatDate from "../../../shared-functions/formatDate"
import PlayButton from "../../../assets/svgs/main-app/play-triangle.svg"

import "../styles/album-tracks.css"

function AlbumTracks({ albumTracksArr, albumInfo, artistInfo, copyrights }) {

    const getTrackArtists = (track) => {
        const numArtists = track.artists.length
        if (numArtists === 1) return <div className="album-page--artist-name">{track.artists[0].name}</div>
        else {
            const separated = track.artists.map((artist, index) => {
                if (index === numArtists - 1) return <div className="album-page--artist-name">{artist.name}</div>
                else return <div className="album-page--artist-name">{`${artist.name}, `}</div>
            })
        return separated
        } 
    }

    return (
        <div className="album-page--tracks grid">
            <div className="album-page--tracks-headers grid">
                <p className="tracks-header--number">#</p>
                <p className="tracks-header--title">Title</p>
                <img className="tracks-header--time" src={TimeIcon} alt="time icon" />
            </div>
            <div className="album-page--tracks-tracks grid">
                {albumTracksArr.map((track, index) =>
                    <div className="album-page--single-track grid" tabIndex={1} key={track.id}>
                        <div className="album-page--track-number">{index + 1}</div>
                        <img className="album-page--hover-play-btn" src={PlayButton} alt="heart test" width={20} />
                        <div className="album-page--track-name-container grid">
                            <div className="album-page--track-name">{track.name}</div>
                            <div className="album-page--artist-sub-container grid">
                                <div className="album-page--explicit-container grid">{track.explicit ? <><div className="album-page--explicit-track">E</div></> : null}</div>
                                <div className="album-page--artist-name-container grid">
                                    {getTrackArtists(track)}
                                </div>
                            </div>
                        </div>
                        <img className="album-page--hide-like" src={GrayHeart} alt="gray heart"></img>
                        <div className="album-page--track-time">{calcTrackTime(track.duration_ms)}</div>
                        <img className="album-page--track-dots" src={MenuDots} alt="menu dots" />
                    </div>
                )}
            </div>
            <div className="album-page--date-copyright-container">
                <div className="album-page--release-date">{formatDate(albumInfo.releaseDate)}</div>
                <div className="album-page--tracks-copyrights grid">
                    {copyrights.map((copyright, index) => 
                        <div key={`${copyright}=${index}`}>{copyright.text}</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AlbumTracks