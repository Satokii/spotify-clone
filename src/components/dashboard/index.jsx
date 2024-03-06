import DashboardMenu from "./components/DashboardMenu"
import DashboardBanner from "./components/DashboardBanner"
import DashboardTopFeaturedPlaylists from "./components/DashboardTopFeaturedPlaylists"
import RenderDashboardPlaylists from "./components/RenderDashboardPlaylists"

import "./styles/dashboard.css"
import "./styles/dashboard-playlists.css"

function Dashboard({ token, queue, setQueue, setToken, currentTrack, notPlaying }) {

    const playlistCategories = [
        {
            category: "pop",
            title: "Pop"
        },
        {
            category: "rock",
            title: "Rock"
        },
        {
            category: "hiphop",
            title: "Hip-Hop"
        },
        {
            category: "mood",
            title: "Mood"
        }
    ]

    return (
        <div className="dashboard-outer-container grid">
            <div className="scrollbar-dashboard">
                <main className="dashboard grid">
                    <DashboardMenu setToken={setToken} />
                    <DashboardBanner token={token} queue={queue} setQueue={setQueue} currentTrack={currentTrack} notPlaying={notPlaying} />
                    <section className="dashboard--sub-container grid">
                        <DashboardTopFeaturedPlaylists token={token} />
                        {playlistCategories.map((cat, index) => ( 
                            <RenderDashboardPlaylists key={`${cat.category}-${index}`} token={token} category={cat.category} title={cat.title} />
                        ))}
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Dashboard