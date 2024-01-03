import { useEffect, useState } from "react";
import axios from "axios";

function MusicPlayer({ token, isPlaying, setIsPlaying }) {

        const changePlayerState = async () => {
          const playState = isPlaying ? "pause" : "play"
          await axios.put(
            `https://api.spotify.com/v1/me/player/${playState}`, {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
              },
            }
          );
        setIsPlaying(!isPlaying)
        };

    return (
        <section>
            <h3>Playback</h3>
            <button onClick={changePlayerState}>play</button>
        </section>
    )
}

export default MusicPlayer