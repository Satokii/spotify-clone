import CurrentlyPlaying from "./CurrentlyPlaying"
import Queue from "../../../Queue"

import "../../styles/main-playback/main-playback.css"

function MainPlayback({ token, queue, setQueue, currentTrack, notPlaying }) {

    return (
        <section className="main-playback--container grid">
            <CurrentlyPlaying currentTrack={currentTrack} notPlaying={notPlaying} />
            <Queue token={token} queue={queue} setQueue={setQueue}/>
        </section>
    )
}

export default MainPlayback