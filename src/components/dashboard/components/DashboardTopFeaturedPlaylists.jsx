import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fixLenthPlistDesc from "../../../shared-functions/fixLengthPlistDesc";
import scrollToTop from "../../../shared-functions/scrollToTop";
import PlayGreen from "../../../assets/svgs/main-app/main-play-btn.svg"
import DashboardCardTemplate from "./DashboardCardTemplate";

import "../styles/dashboard-top-playlists.css"

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
        <div className="dashboard--top-featured-playlists grid">
            <div className="dashboard--top-featured-playlists-header-container grid">
                <div className="dashboard--top-featured-playlists-header">Featured Playlists Where You Are</div>
                <div className="dashboard--top-featured-playlists-show-all">Show all</div>
            </div>
            <DashboardCardTemplate itemArr={topPlaylists} />
        </div>
    )
}

export default DashboardTopFeaturedPlaylists