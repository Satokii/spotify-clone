import NavMainLinks from './components/NavMainLinks'
import NavLibraryHeader from './components/NavLibraryHeader'
import NavLibraryFilter from './components/NavLibraryFilter'
import NavLibraryPlaylists from './components/NavLibraryPlaylists'

import './styles/navigation.css'

function Navigation({ token }) {

    return (
        <section className="navigation--container grid">
            <NavMainLinks />
            <div className='navigation--library-container grid'>
                <NavLibraryHeader />
                <NavLibraryFilter />
                <NavLibraryPlaylists token={token} />
            </div>
        </section>
    )
}

export default Navigation