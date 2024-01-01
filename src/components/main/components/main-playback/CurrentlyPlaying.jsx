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

    //   console.log(currentTrack)

    return (
        <div className="main-playback--cur-playing-container grid">
            <div className="main-playback--cur-playing-header-container grid">
                <h3 className="main-playback--cur-playing-header">Currently playing</h3>
                <div className="bars grid">
                    <div className="bars__item"></div>
                    <div className="bars__item"></div>
                    <div className="bars__item"></div>
                    <div className="bars__item"></div>
                </div>
            </div>
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