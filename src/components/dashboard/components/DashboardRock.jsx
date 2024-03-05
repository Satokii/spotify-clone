import { useEffect, useState } from "react";
import axios from "axios";
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
                    limit: 6
                }
              }
            );
            setNewRock(data.playlists.items)
              console.log(data.playlists.items)
        };
        getTopFeaturedPlaylists()
    }, [token])

    return (
      <div className="dashboard--playlist-container grid">
      <div className="dashboard--playlist-header-container grid">
          <div className="dashboard--playlist-header">Rock</div>
          <div className="dashboard--playlist-show-all">Show all</div>
      </div>
      <DashboardCardTemplate itemArr={newRock} />
  </div>
    )
}

export default DashboardRock