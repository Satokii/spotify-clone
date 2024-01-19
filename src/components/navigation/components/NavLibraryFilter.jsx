import { NavLink } from "react-router-dom"
import CrossGray from "../../../assets/svgs/main-app/cross-gray.svg"
import CrossBlack from "../../../assets/svgs/main-app/cross-black.svg"

import "../styles/nav-library-filter.css"

function NavLibraryFilter() {

    return (
        <div className='navigation--library-filter-container grid'>
            <div className="navigation--library-filter-none-container grid">
                <img className="navigation--library-filter-none-icon" src={CrossGray} alt="cross icon" />
            </div>
            <div className="navigation--library-filter-playlists">Playlists</div>
            <div className="navigation--library-filter-albums">Albums</div>
        </div>
    )
}

export default NavLibraryFilter