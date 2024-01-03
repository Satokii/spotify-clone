import CurrentlyPlaying from "./CurrentlyPlaying"
import Queue from "./Queue"

import "../../styles/main-playback/main-playback.css"

function MainPlayback({ token, isPlaying, setIsPlaying }) {

    return (
        <section className="main-playback--container grid">
            <CurrentlyPlaying token={token} isPlaying={isPlaying}setIsPlaying={setIsPlaying} />
            <Queue token={token} />
        </section>
    )
}

export default MainPlayback