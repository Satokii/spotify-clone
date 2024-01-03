import axios from "axios";

import playButton from "../../assets/svgs/player/play-button.svg"
import pauseButton from "../../assets/svgs/player/pause-button.svg"
import forwardButton from "../../assets/svgs/player/forward-button.svg"
import backButton from "../../assets/svgs/player/back-button.svg"

import "./styles/music-player.css"
import { useState } from "react";

function MusicPlayer({ token, currentTrack, trackDuration, currentProgress, isPlaying, setIsPlaying }) {

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

        const skipTrack = async (skipDirection) => {
          await axios.post(
            `https://api.spotify.com/v1/me/player/${skipDirection}`, {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
              },
            }
          );
        };

        const togglePlayBtn = isPlaying ? pauseButton : playButton

        const timeElapsed = Number((currentProgress/trackDuration) * 500).toFixed(0)
        console.log(timeElapsed)

    return (
        <section>
          <h3>Playback</h3>    
          <div className='song-player-container grid'>
            <div className='song-controls grid'>
              <div className='back-btn' onClick={() => skipTrack("previous")}>
                <img src={backButton} alt="skip back button" />
              </div>
              <div className='play-btn' onClick={changePlayerState}>
                <img src={togglePlayBtn} alt="play/pause button" />
              </div>
              <div className='forward-btn' onClick={() => skipTrack("next")}>
                <img src={forwardButton} alt="skip forward button" />
              </div>
            </div>
            <div className='song-progress-bar-container grid'>
              <p className='song-start'>0:00</p>
              <div className='song-progress-bar' >
                {/* <input className='song-expired' type="range" name="song-expired" min={0} max={100} value={60} /> */}
                <div className='song-expired' style={{width: timeElapsed * 1}}/>
              </div>
              <p className='song-end'>3:24</p>
            </div>
          </div>
        </section>
    )
}

export default MusicPlayer