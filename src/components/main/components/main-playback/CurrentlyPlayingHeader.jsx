import { useState } from "react"

import "../../styles/main-playback/currently-playing-header.css"
import "../../../../keyframes/currently-playing-ani.css"

function CurrentlyPlayingHeader({ isPlaying, setPulse }) {

    const playPulse = (e) => {
        if (e.target.className === 'pulse-on') {
            e.target.className = 'pulse-off'
            setPulse(false)
        }
        else {
            e.target.className = 'pulse-on'
            setPulse(true)
        }
    }

    return (
        <div className="main-playback--cur-playing-header-container grid">
            {isPlaying ? <h3 className="main-playback--cur-playing-header">Currently playing</h3> :
            <h3 className="main-playback--cur-playing-header">Currently paused</h3>}
            {isPlaying ? 
            <div className="bars grid">
                <div className="bars__item"></div>
                <div className="bars__item"></div>
                <div className="bars__item"></div>
                <div className="bars__item"></div>
            </div> :
            <div className="empty-bars grid">
                <div className="empty-bars__item"></div>
                <div className="empty-bars__item"></div>
                <div className="empty-bars__item"></div>
                <div className="empty-bars__item"></div>
            </div>
            }
            <div className="hi" onClick={e => playPulse(e)}>Click me for a good time</div>
        </div>
    )
}

export default CurrentlyPlayingHeader