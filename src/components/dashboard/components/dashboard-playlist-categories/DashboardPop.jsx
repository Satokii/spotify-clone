import { useEffect, useState } from "react";
import axios from "axios";
import DashboardCardTemplate from "../DashboardCardTemplate";

function DashboardPop({ token }) {
    const [pop, setPop] = useState([])

    useEffect(() => {
        const getPopPlaylists = async () => {
            const { data } = await axios.get(
              `https://api.spotify.com/v1/browse/categories/pop/playlists`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
                params: {
                    limit: 12
                }
              }
            );
            setPop(data.playlists.items)
        };
        getPopPlaylists()
    }, [token])
    return (
        <DashboardCardTemplate title="Pop" itemArr={pop} />
    )
}

export default DashboardPop