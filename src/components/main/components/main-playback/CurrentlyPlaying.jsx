import { useEffect, useState } from "react";
import axios from "axios";
import CurrentlyPlayingHeader from "./CurrentlyPlayingHeader";
import CurrentlyPlayingTrack from "./CurrentlyPlayingTrack";

import "../../styles/main-playback/currently-playing.css"
import "../../../../keyframes/img-pulse.css"

function CurrentlyPlaying({ token, isPlaying, setIsPlaying }) {

    const [currentTrack, setCurrentTrack] = useState([])
    const [pulse, setPulse] = useState(false)

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
            <CurrentlyPlayingHeader isPlaying={isPlaying} setPulse={setPulse} />
            <CurrentlyPlayingTrack currentTrack={currentTrack} pulse={pulse} />
        </div>
    )
}

export default CurrentlyPlaying