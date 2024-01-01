import CurrentlyPlaying from "./CurrentlyPlaying"
import Queue from "./Queue"

import "../../styles/main-playback/main-playback.css"

function MainPlayback({ token }) {

    return (
        <section className="main-playback--container grid">
            <CurrentlyPlaying token={token} />
            <Queue token={token} />
        </section>
    )
}

export default MainPlayback