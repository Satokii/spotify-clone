import CurrentlyPlaying from "./CurrentlyPlaying"

import "../../styles/main-playback/main-playback.css"

function MainPlayback({ token }) {

    return (
        <section className="main-playback--container grid">
            <CurrentlyPlaying token={token} />
            <div>
                <h3>Queue</h3>
                <p>Up next:</p>
            </div>
        </section>
    )
}

export default MainPlayback