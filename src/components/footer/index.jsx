import MusicPlayer from '../music-player'
import VolumeControls from '../volume'

import './styles/footer.css'

function Footer({ token, currentTrack, setCurrentTrack }) {

    return (
        <footer className='footer grid'>
            <section></section>
            <MusicPlayer token={token} currentTrack={currentTrack} setCurrentTrack={setCurrentTrack} />
            <VolumeControls />
        </footer>
    )
}

export default Footer