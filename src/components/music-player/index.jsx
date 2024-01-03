import { useEffect, useState } from "react";
import axios from "axios";

function MusicPlayer({ token, isPlaying }) {

    const [playback, setPlayback] = useState()

    // useEffect(() => {
        const changePlayerState = async () => {
          const playState = isPlaying ? "pause" : "play"
          const { data } = await axios.put(
            `https://api.spotify.com/v1/me/player/${playState}`,{} ,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
              },
            }
          );
          console.log(data)
          setPlayback(data)
        };
        changePlayerState();
    //   }, [token]);

    return (
        <section>
            <h3>Playback</h3>
            <button onClick={getTopTracksPview}>play</button>
        </section>
    )
}

export default MusicPlayer