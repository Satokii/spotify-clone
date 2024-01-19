import { NavLink } from "react-router-dom"

import "../styles/nav-library-filter.css"

function NavLibraryFilter() {

    return (
        <div className='navigation--library-filter-container grid'>
            <div>Playlists</div>
            <div>Albums</div>
        </div>
    )
}

export default NavLibraryFilter