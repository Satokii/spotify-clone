import CurrentlyPlaying from "./CurrentlyPlaying"

import "../../styles/main-playback/main-playback.css"

function MainPlayback() {

    return (
        <section className="main-playback--container grid">
            <CurrentlyPlaying />
            <div>
                <h3>Queue</h3>
                <p>Up next:</p>
            </div>
        </section>
    )
}

export default MainPlayback