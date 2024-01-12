import { useState } from "react"

import "../styles/artist-discography.css"

function ArtistDiscography() {

    const FILTER_INITIAL_STATE = [
        {
            name: 'Popular Releases',
            isActive: true,
            className: 'artist--discography-filter-popular'
        },
        {
            name:'Albums',
            isActive: false,
            className: 'artist--discography-filter-albums'
        },
        {
            name: 'Singles and EPs',
            isActive: false,
            className: 'artist--discography-filter-singles'
        }
    ]

    const [activeFilter, setActiveFilter] = useState(FILTER_INITIAL_STATE)

    const toggleDiscoFilter = (e) => {
        const updatedDiscoFilter = activeFilter.map(filter =>{
            if (filter.name === e.target.innerText) return {...filter, isActive: true}
            else return {...filter, isActive: false}
        })
        setActiveFilter(updatedDiscoFilter)
    }

    return (
        <div className="artist-page--discography grid">
            <h3 className="artist--discography-header">Discography</h3>
            <ul className="artist--discography-filter grid">
                {activeFilter.map((filter, index) =>
                    <li key={index} onClick={e => toggleDiscoFilter(e)}>{filter.name}</li>
                )}
                {/* <li className="artist--discography-filter-popular">Popular Releases</li>
                <li className="artist--discography-filter-albums">Albums</li>
                <li className="artist--discography-filter-singles">Singles and EPs</li> */}
            </ul>
        </div>
    )
}

export default ArtistDiscography