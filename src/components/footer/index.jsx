import MusicPlayer from '../music-player'
import VolumeControls from '../volume'

import './styles/footer.css'

function Footer({ token, currentTrack, setCurrentTrack, setQueue }) {

    return (
        <footer className='footer grid'>
            <section></section>
            <MusicPlayer token={token} currentTrack={currentTrack} setCurrentTrack={setCurrentTrack} setQueue={setQueue} />
            <VolumeControls token={token} />
        </footer>
    )
}

export default Footer