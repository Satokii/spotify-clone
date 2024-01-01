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
          setQueue(data.queue)
        };
        getQueue();
      }, [token]);

      const fixLength = (string) => {
        if (string.length > 13) {
            return `${string.slice(0, 13)}...`
        }
        else return string
      }

      console.log(fixLength('hello world my name is the world'))

    return (
        <div className="main-playback--queue-container grid">
            <h3 className="main-playback--queue-header">Next in queue...</h3>
            <div className="main-playback--queue-list grid" >
                {queue.map((track, index) =>
                    <div className="main-playback--queue-item grid" key={`${track.id}-${index}`}>
                        {track.album.images.length ? <img src={track.album.images[0].url} alt={`${track.name}-image`} /> : <div>No Image</div>}
                        <p className="main-playback--queue-track">{fixLength(track.name)}</p>
                        <p className="main-playback--queue-artist">{fixLength(track.artists[0].name)}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Queue