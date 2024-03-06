import { useEffect, useState } from "react";
import DashboardCardTemplate from "../DashboardCardTemplate";
import getDashboardPlaylists from "../../functions/getDashboardPlaylists";

function DashboardRock({ token }) {

    const [rock, setRock] = useState([])

    useEffect(() => {
        const getRockPlaylists = async () => {
            const data = await getDashboardPlaylists(token, "rock")
            setRock(data.playlists.items)
        };
        getRockPlaylists()
    }, [token])

    return (
      <DashboardCardTemplate title="Rock" itemArr={rock} />
    )
}

export default DashboardRock