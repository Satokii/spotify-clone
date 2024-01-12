import { useEffect, useState } from "react"
import getAlbums from "../functions/getAlbums.js"
import getYear from "../../../shared-functions/getYear"
import GrayCircle from "../../../assets/svgs/main-app/gray-circle.svg"

import "../styles/artist-discography.css"

function ArtistDiscography({ token, artistId, topTracksArr, albumObj, setAlbumObj }) {

    const FILTER_INITIAL_STATE = [
        {
            name: 'Popular Releases',
            isActive: true,
            className: 'active-artist--discography-filter'
        },
        {
            name:'Albums',
            isActive: false,
            className: 'inactive-artist--discography-filter'
        },
        {
            name: 'Singles and EPs',
            isActive: false,
            className: 'inactive-artist--discography-filter'
        }
    ]

    const [activeFilter, setActiveFilter] = useState(FILTER_INITIAL_STATE)
    const [showDiscoItems, setShowDiscoItems] = useState([])
    const [discoAlbums, setDiscoAlbums] = useState([])

    const toggleDiscoFilter = (e) => {
        const updatedDiscoFilter = activeFilter.map(filter =>{
            if (filter.name === e.target.innerText) return {...filter, className: 'active-artist--discography-filter', isActive: true}
            else return {...filter,  className: 'inactive-artist--discography-filter', isActive: false}
        })
        setActiveFilter(updatedDiscoFilter)
    }
    // getAlbums(token, artistId, 'album', setDiscoAlbums)
    // console.log(discoAlbums)
    console.log(topTracksArr)
    topTracksArr.map(track => {
        setAlbumObj({
            name: track.name,
            img: track.album.images[0].url,
            release_date: track.album.release_date,
            type: track.album.album_type
        })
    })

    useEffect(() => {
        let obj
        activeFilter.map(filter => {
            if (filter.isActive) {
                if (filter.name === "Popular Releases") {
                    // arr = topTracksArr
                    topTracksArr.map(track => {
                        setAlbumObj({
                            name: track.name,
                            img: track.album.images[0].url,
                            release_date: track.album.release_date,
                            type: track.album.album_type
                        })
                    })
                    obj = albumObj
                }
                else if (filter.name === "Albums") {
                    // topTracksArr.map(track => {
                    //     if (track.album.album_type === "album") {
                    //         arr.push(track)
                    //     }
                    // })
                    obj = albumObj
                }
                else if (filter.name === "Singles and EPs") {
                    topTracksArr.map(track => {
                        if (track.album.album_type === "single") {
                            arr.push(track)
                        }
                    })
                    // getAlbums(token, artistId, 'single', setDiscoAlbums)
                    // arr = discoAlbums
                }
                setShowDiscoItems(arr)
            }
        })
    }, [activeFilter, artistId, discoAlbums, token, topTracksArr])

    return (
        <div className="artist-page--discography grid">
            <h3 className="artist--discography-header">Discography</h3>
            <ul className="artist--discography-filter grid">
                {activeFilter.map((filter, index) =>
                    <li className={filter.className} key={index} onClick={e => toggleDiscoFilter(e)}>{filter.name}</li>
                )}
            </ul>
            <div className="artist--discography-item-list grid">
                {showDiscoItems.map((item, index) =>
                    <div className="artist--discography-single-item grid" key={`${item.name}-${index}`}>
                        <div className="artist--discography-single-item-img">
                            {item.album.images.length ? (
                            <img src={item.album.images[0].url} alt={item.name} />
                            ) : (<div></div>
                            )}
                        </div>
                        <div className="artist--discography-single-item-name">{item.name}</div>
                        <div className="artist--discography-single-item-more-details-container grid">
                            <div className="artist--discography-single-item-date">{getYear(item.album.release_date)}</div>
                            <img className="gray-circle" src={GrayCircle} alt="gray circle" />
                            <div className="artist--discography-single-item-type">{item.album.album_type}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ArtistDiscography