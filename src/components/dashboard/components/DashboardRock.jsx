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
                    limit: 12
                }
              }
            );
            setNewRock(data.playlists.items)
        };
        getTopFeaturedPlaylists()
    }, [token])

    return (
      <DashboardCardTemplate title="Rock" itemArr={newRock} />
    )
}

export default DashboardRock