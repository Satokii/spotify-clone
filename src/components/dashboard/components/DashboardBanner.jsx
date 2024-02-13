import CurrentlyPlaying from "./dashboard-playback/CurrentlyPlaying"
import Queue from "../../Queue"

import "../styles/dashboard-banner.css"

function DashboardBanner({ token, queue, setQueue, currentTrack, notPlaying }) {

    return (
        <section className="dashboard--banner grid">
            <div className="dashboard--banner-greeting">Good Morning</div>
            <div className="dashboard--banner-player-container grid">
                <CurrentlyPlaying currentTrack={currentTrack} notPlaying={notPlaying} />
                <Queue token={token} queue={queue} setQueue={setQueue}/>
            </div>
        </section>
    )
}

export default DashboardBanner