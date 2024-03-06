import axios from "axios";
import { useEffect, useState } from "react";
import DashboardCardTemplate from "./DashboardCardTemplate";

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
                    limit: 6
                }
              }
            );
            setTopPlaylists(data.playlists.items)
        };
        getTopFeaturedPlaylists()
    }, [token])

    return (
        <DashboardCardTemplate title="Featured Playlists Where You Are" itemArr={topPlaylists} />
    )
}

export default DashboardTopFeaturedPlaylists