import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/sidebar-next-in-queue.css"
import noteIcon from "../../../assets/svgs/main-app/queue-note.svg"
import SidebarNextInQueueArtists from "../functions/SidebarNextInQueueArtists";
import fixLengthPreviews from "../../../shared-functions/fixLengthPreviews";
import scrollToTop from "../../../shared-functions/scrollToTop";

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
            console.log(queue[0])
            setNextInQueueArtists(queue[0].artists)
            setNextInQueue({
                albumId: queue[0].album.id,
                artistId: queue[0].artists[0].id,
                img: queue[0].album.images[0].url,
                title: fixLengthPreviews(queue[0].name),
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
                    <Link className="sidebar--queue-track-name" to={`/album/${nextInQueue.albumId}/${nextInQueue.artistId}`} onClick={scrollToTop}>{nextInQueue.title}</Link>
                    <p className="sidebar--queue-artists">{SidebarNextInQueueArtists(nextInQueueArtists)}</p>
                </div>
            </div>
        </div>
    )
}

export default SidebarNextInQueue