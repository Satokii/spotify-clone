import { useEffect, useState } from "react"
import getPopularReleases from "../functions/getPopularReleases.js"
import getAlbums from "../functions/getAlbums.js"
import getSingles from "../functions/getSingles.js"
import getYear from "../../../shared-functions/getYear"
import GrayCircle from "../../../assets/svgs/main-app/gray-circle.svg"

import "../styles/artist-discography.css"

function ArtistDiscography({ token, artistId, topTracksArr, popularReleases, album, single }) {

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
    // const [showDiscoItems, setShowDiscoItems] = useState([])
    const [showDiscoItems, setShowDiscoItems] = useState('popular')
    // const [discoAlbums, setDiscoAlbums] = useState([])

    const toggleDiscoFilter = (e) => {
        const updatedDiscoFilter = activeFilter.map(filter =>{
            if (filter.name === e.target.innerText) return {...filter, className: 'active-artist--discography-filter', isActive: true}
            else return {...filter,  className: 'inactive-artist--discography-filter', isActive: false}
        })
        setActiveFilter(updatedDiscoFilter)
    }

    // const [showFiltered, setShowFiltered] = useState()

    useEffect(() => {
        activeFilter.map(filter => {
            if (filter.isActive) {
                if (filter.name === "Popular Releases") {
                    setShowDiscoItems('popular')
                    
                }
                else if (filter.name === "Albums") {
                    setShowDiscoItems('albums')
                    

                }
                else if (filter.name === "Singles and EPs") {
                    setShowDiscoItems('singles')
                   
                }
            }
        })
    }, [activeFilter])

    const showFiltered = () => {
        if (showDiscoItems === "popular") {
            return (
                popularReleases.map((item, index) =>
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
            )
        )
        }
        else if (showDiscoItems === "albums") {
            return (
                album.map((item, index) =>
            <div className="artist--discography-single-item grid" key={`${item.name}-${index}`}>
                <div className="artist--discography-single-item-img">
                    {item.images.length ? (
                    <img src={item.images[0].url} alt={item.name} />
                    ) : (<div></div>
                    )}
                </div>
                <div className="artist--discography-single-item-name">{item.name}</div>
                <div className="artist--discography-single-item-more-details-container grid">
                    <div className="artist--discography-single-item-date">{getYear(item.release_date)}</div>
                    <img className="gray-circle" src={GrayCircle} alt="gray circle" />
                    <div className="artist--discography-single-item-type">{item.album_type}</div>
                </div>
            </div>
        )
            )
        }
        else if (showDiscoItems === "singles") {
            return (
                single.map((item, index) =>
            <div className="artist--discography-single-item grid" key={`${item.name}-${index}`}>
                <div className="artist--discography-single-item-img">
                    {item.images.length ? (
                    <img src={item.images[0].url} alt={item.name} />
                    ) : (<div></div>
                    )}
                </div>
                <div className="artist--discography-single-item-name">{item.name}</div>
                <div className="artist--discography-single-item-more-details-container grid">
                    <div className="artist--discography-single-item-date">{getYear(item.release_date)}</div>
                    <img className="gray-circle" src={GrayCircle} alt="gray circle" />
                    <div className="artist--discography-single-item-type">{item.album_type}</div>
                </div>
            </div>
        )
            )
        }
    }
    console.log(showFiltered())

    return (
        <div className="artist-page--discography grid">
            <h3 className="artist--discography-header">Discography</h3>
            <ul className="artist--discography-filter grid">
                {activeFilter.map((filter, index) =>
                    <li className={filter.className} key={index} onClick={e => toggleDiscoFilter(e)}>{filter.name}</li>
                )}
            </ul>
            <div className="artist--discography-item-list grid">
                {showFiltered()}
            </div>
        </div>
    )
}

export default ArtistDiscography