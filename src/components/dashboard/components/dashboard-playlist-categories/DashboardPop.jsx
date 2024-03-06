import { useEffect, useState } from "react";
import DashboardCardTemplate from "../DashboardCardTemplate";
import getDashboardPlaylists from "../../functions/getDashboardPlaylists";

function DashboardPop({ token }) {
    const [pop, setPop] = useState([])

    useEffect(() => {
        const getPopPlaylists = async () => {
            const data = await getDashboardPlaylists(token, "pop")
            setPop(data.playlists.items)
        };
        getPopPlaylists()
    }, [token])
    
    return (
        <DashboardCardTemplate title="Pop" itemArr={pop} />
    )
}

export default DashboardPop