import NavMainLinks from './components/NavMainLinks'
import NavLibraryHeader from './components/NavLibraryHeader'

import './styles/navigation.css'

function Navigation({ token }) {

    return (
        <section className="navigation--container grid">
            <NavMainLinks />
            <NavLibraryHeader />
            <div className='navigation--playlists'></div>
        </section>
    )
}

export default Navigation