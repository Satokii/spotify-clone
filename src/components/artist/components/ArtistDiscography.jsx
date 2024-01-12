import { useEffect, useState } from "react"

import "../styles/artist-discography.css"

function ArtistDiscography({ topTracksArr }) {

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

    const toggleDiscoFilter = (e) => {
        const updatedDiscoFilter = activeFilter.map(filter =>{
            if (filter.name === e.target.innerText) return {...filter, className: 'active-artist--discography-filter', isActive: true}
            else return {...filter,  className: 'inactive-artist--discography-filter', isActive: false}
        })
        setActiveFilter(updatedDiscoFilter)
    }

    const [showDiscoItems, setShowDiscoItems] = useState([])

    useEffect(() => {
        let arr = []
        activeFilter.map(filter => {
            if (filter.isActive) {
                if (filter.name === "Popular Releases") {
                    arr = topTracksArr
                }
                else if (filter.name === "Albums") {
                    topTracksArr.map(track => {
                        if (track.album.album_type === "album") {
                            arr.push(track)
                        }
                    })
                }
                else if (filter.name === "Singles and EPs") {
                    topTracksArr.map(track => {
                        if (track.album.album_type === "single") {
                            arr.push(track)
                        }
                    })
                }
                setShowDiscoItems(arr)
            }
        })
    }, [activeFilter, topTracksArr])

    console.log(showDiscoItems)

    return (
        <div className="artist-page--discography grid">
            <h3 className="artist--discography-header">Discography</h3>
            <ul className="artist--discography-filter grid">
                {activeFilter.map((filter, index) =>
                    <li className={filter.className} key={index} onClick={e => toggleDiscoFilter(e)}>{filter.name}</li>
                )}
            </ul>
            <div className="artist--discography-item-list">
                {showDiscoItems.map((item, index) =>
                    <div key={`${item.name}-${index}`}>{item.name}</div>
                )}
            </div>
        </div>
    )
}

export default ArtistDiscography