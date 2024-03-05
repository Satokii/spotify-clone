import DashboardMenu from "./components/DashboardMenu"
import DashboardBanner from "./components/DashboardBanner"
import DashboardTopFeaturedPlaylists from "./components/DashboardTopFeaturedPlaylists"
import DashboardRock from "./components/DashboardRock"

import "./styles/dashboard.css"

function Dashboard({ token, queue, setQueue, setToken, currentTrack, notPlaying }) {

    return (
        <div className="dashboard-outer-container grid">
            <div className="scrollbar-dashboard">
                <main className="dashboard grid">
                    <DashboardMenu setToken={setToken} />
                    <DashboardBanner token={token} queue={queue} setQueue={setQueue} currentTrack={currentTrack} notPlaying={notPlaying} />
                    <section className="dashboard--sub-container grid">
                        <DashboardTopFeaturedPlaylists token={token} />
                        <DashboardRock token={token} />
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Dashboard