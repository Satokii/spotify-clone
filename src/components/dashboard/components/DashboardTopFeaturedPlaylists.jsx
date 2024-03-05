import axios from "axios";
import { useEffect, useState } from "react";
import DashboardCardTemplate from "./DashboardCardTemplate";

import "../styles/dashboard-playlists.css"

function DashboardTopFeaturedPlaylists({ token }) {

    const [topPlaylists, setTopPlaylists] = useState([])

    useEffect(() => {
        const getTopFeaturedPlaylists = async () => {
            const { data } = await axios.get(
              `https://api.spotify.com/v1/browse/featured-playlists`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
                params: {
                    limit: 10
                }
              }
            );
            setTopPlaylists(data.playlists.items)
        };
        getTopFeaturedPlaylists()
    }, [token])

    return (
        <div className="dashboard--playlist-container grid">
            <div className="dashboard--playlist-header-container grid">
                <div className="dashboard--playlist-header">Featured Playlists Where You Are</div>
                <div className="dashboard--playlist-show-all">Show all</div>
            </div>
            <DashboardCardTemplate itemArr={topPlaylists} />
        </div>
    )
}

export default DashboardTopFeaturedPlaylists