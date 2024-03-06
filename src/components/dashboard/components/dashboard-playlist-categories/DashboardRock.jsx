import { useEffect, useState } from "react";
import axios from "axios";
import DashboardCardTemplate from "../DashboardCardTemplate";

function DashboardRock({ token }) {

    const [rock, setRock] = useState([])

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
            setRock(data.playlists.items)
        };
        getTopFeaturedPlaylists()
    }, [token])

    return (
      <DashboardCardTemplate title="Rock" itemArr={rock} />
    )
}

export default DashboardRock