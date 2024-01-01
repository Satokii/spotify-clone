import { useEffect, useState } from "react";
import axios from "axios";
import CurrentlyPlayingHeader from "./CurrentlyPlayingHeader";

import "../../styles/main-playback/currently-playing.css"

function CurrentlyPlaying({ token }) {

    const [currentTrack, setCurrentTrack] = useState([])
    const [isPlaying, setIsPlaying] = useState(false)

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
          track.push(data.item)
          setCurrentTrack(track)
          setIsPlaying(data.is_playing)
        };
        getCurrentTrack();
      }, [token]);

    return (
        <div className="main-playback--cur-playing-container grid">
            <CurrentlyPlayingHeader isPlaying={isPlaying} />
            {currentTrack.map((track, index) =>
                <div className="main-playback--cur-playing-item grid" key={`${track.id}-${index}`}>
                    {track.album.images.length ? <img src={track.album.images[0].url} alt={`${track.name}-image`} /> : <div>No Image</div>}
                    <div className="main-playback--cur-playing-details">
                        <p className="main-playback--cur-playing-title">{track.name}</p>
                        <p className="main-playback--cur-playing-artist">{track.artists[0].name}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CurrentlyPlaying