import { useEffect, useState } from "react"
import axios from "axios";
import "../styles/sidebar-next-in-queue.css"
import noteIcon from "../../../assets/svgs/main-app/queue-note.svg"
import SidebarTrackArtists from "../functions/SidebarTrackArtists";

function SidebarNextInQueue({ token }) {

    const [nextInQueue, setNextInQueue] = useState({})
    const [nextInQueueArtists, setNextInQueueArtists] = useState([])

    useEffect(() => {
        const getNextInQueue = async () => {
            const { data } = await axios.get(
            "https://api.spotify.com/v1/me/player/queue",
            {
                headers: {
                Authorization: `Bearer ${token}`,
                }
            }
            );
            const { queue } = data
            setNextInQueueArtists(queue[0].artists)
            setNextInQueue({
                trackId: queue[0].id,
                img: queue[0].album.images[0].url,
                title: queue[0].name,
                artist: queue[0].artists[0].name
            })
        };
        getNextInQueue()
    }, [token])

    return (
        <div className="sidebar--queue-container grid">
            <div className="sidebar--queue-headers grid">
                <p className="sidebar--queue-title">Next in queue</p>
                <p className="sidebar--queue-open-queue">Open queue</p>
            </div>
            <div className="sidebar--queue-track-details-container grid">
                <img className="sidebar--queue-note-icon" src={noteIcon} alt="note icon" />
                {nextInQueue.img ?
                    <img className="sidebar--queue-img" src={nextInQueue.img} alt="sidebar queue img" />
                    : <div></div>
                }
                <div>
                    <p>{nextInQueue.title}</p>
                    <p className="sidebar--queue-artists">{SidebarTrackArtists(nextInQueueArtists)}</p>
                </div>
            </div>
        </div>
    )
}

export default SidebarNextInQueue