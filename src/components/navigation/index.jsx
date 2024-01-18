import NavMainLinks from './components/NavMainLinks'

import './styles/navigation.css'

function Navigation({ token }) {

    return (
        <section className="navigation--container grid">
            <NavMainLinks />
            <div className='navigation--library'></div>
            <div className='navigation--playlists'></div>
        </section>
    )
}

export default Navigation