import { useEffect, useState } from "react";
import axios from "axios";

import "../../styles/main-playback/queue.css"

function Queue({ token }) {

    const [queue, setQueue] = useState([])

    useEffect(() => {
        const getQueue = async () => {
          const { data } = await axios.get(
            "https://api.spotify.com/v1/me/player/queue",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              }
            }
          );
          console.log(data.queue)
          setQueue(data.queue)
        };
        getQueue();
      }, [token]);

    return (
        <div className="main-playback--queue-container grid">
            <h3>Queue</h3>
            <p>Up next:</p>
            <div></div>
        </div>
    )
}

export default Queue