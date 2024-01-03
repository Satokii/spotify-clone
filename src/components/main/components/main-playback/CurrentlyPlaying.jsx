import { useState } from "react";
import CurrentlyPlayingHeader from "./CurrentlyPlayingHeader";
import CurrentlyPlayingTrack from "./CurrentlyPlayingTrack";

import "../../styles/main-playback/currently-playing.css"
import "../../../../keyframes/img-pulse.css"

function CurrentlyPlaying({ currentTrack, isPlaying, notPlaying }) {

    const [pulse, setPulse] = useState(false)

    return (
        <div className="main-playback--cur-playing-container grid">
            <CurrentlyPlayingHeader isPlaying={isPlaying} setPulse={setPulse} />
            <CurrentlyPlayingTrack currentTrack={currentTrack} notPlaying={notPlaying} pulse={pulse} />
        </div>
    )
}

export default CurrentlyPlaying