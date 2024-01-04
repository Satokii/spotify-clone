import MusicPlayer from '../music-player'

import './styles/footer.css'

function Footer({ token, currentTrack, setCurrentTrack }) {

    return (
        <footer className='footer'>
            <MusicPlayer token={token} currentTrack={currentTrack} setCurrentTrack={setCurrentTrack} />
        </footer>
    )
}

export default Footer