import { useEffect, useState } from "react";
import axios from "axios";

import "../../styles/main-playback/currently-playing.css"

function CurrentlyPlaying({ token }) {

    const [currentTrack, setCurrentTrack] = useState([])

    useEffect(() => {
        let track = []
        const getCurrentTrack = async () => {
          const { data } = await axios.get(
            "https://api.spotify.com/v1/me/player/currently-playing",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              }
            }
          );
        //   console.log(data.item)
        track.push(data.item)
          setCurrentTrack(track)
        };
        getCurrentTrack();
      }, [token]);

    //   console.log(currentTrack.name)

    return (
        <div className="main-playback--cur-playing-container grid">
            <h3>Currently Playing</h3>
            <div className="main-playback--cur-playing-item grid">
                {currentTrack.map((track, index) =>
                    <div className="main-playback--cur-playing-details" key={`${track.id}-${index}`}>
                        {track.album.images.length ? <img src={track.album.images[0].url} alt={`${track.name}-image`} /> : <div>No Image</div>}
                        <p>{track.name}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CurrentlyPlaying