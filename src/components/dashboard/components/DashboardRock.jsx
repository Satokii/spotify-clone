import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import scrollToTop from "../../../shared-functions/scrollToTop";
import PlayGreen from "../../../assets/svgs/main-app/main-play-btn.svg"
import fixLenthPlistDesc from "../../../shared-functions/fixLengthPlistDesc";
import DashboardCardTemplate from "./DashboardCardTemplate";

function DashboardRock({ token }) {

    const [newRock, setNewRock] = useState([])

    useEffect(() => {
        const getTopFeaturedPlaylists = async () => {
            const { data } = await axios.get(
              `https://api.spotify.com/v1/browse/categories/rock/playlists`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
                params: {
                    limit: 10
                }
              }
            );
            setNewRock(data.playlists.items)
        };
        getTopFeaturedPlaylists()
    }, [token])

    return (
      <div className="dashboard--top-featured-playlists grid">
      <div className="dashboard--top-featured-playlists-header-container grid">
          <div className="dashboard--top-featured-playlists-header">Rock</div>
          <div className="dashboard--top-featured-playlists-show-all">Show all</div>
      </div>
      <DashboardCardTemplate itemArr={newRock} />
  </div>
    )
}

export default DashboardRock