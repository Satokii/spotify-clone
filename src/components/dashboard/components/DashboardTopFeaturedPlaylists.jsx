import axios from "axios";
import { useEffect } from "react";

function DashboardTopFeaturedPlaylists({ token }) {

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
            console.log(data.playlists.items)
        };
        getTopFeaturedPlaylists()
    }, [token])

    return (
        <div className="dashboard--top-featured-playlists">
            hi
        </div>
    )
}

export default DashboardTopFeaturedPlaylists