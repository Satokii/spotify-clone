import { useEffect, useState } from "react";
import axios from "axios";

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
            console.log(data.playlists.items)
        };
        getTopFeaturedPlaylists()
    }, [token])

    return (
        <section>Hi</section>
    )
}

export default DashboardRock