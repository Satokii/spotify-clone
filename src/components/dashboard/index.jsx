import DashboardMenu from "./components/DashboardMenu"
import DashboardBanner from "./components/DashboardBanner"
import DashboardTopFeaturedPlaylists from "./components/dashboard-playlist-categories/DashboardTopFeaturedPlaylists"
import DashboardRock from "./components/dashboard-playlist-categories/DashboardRock"
import DashboardPop from "./components/dashboard-playlist-categories/DashboardPop"

import "./styles/dashboard.css"
import "./styles/dashboard-playlists.css"

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
                        <DashboardPop token={token} />

                    </section>
                </main>
            </div>
        </div>
    )
}

export default Dashboard