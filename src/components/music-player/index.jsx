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

        const calcTrackTime = (ms) => {
          const minutes = Math.floor(ms / 60000);
          const seconds = ((ms % 60000) / 1000).toFixed(0);
          return (
            seconds == 60 ?
            (minutes+1) + ":00" :
            minutes + ":" + (seconds < 10 ? "0" : "") + seconds
          )
        }
        
        const togglePlayBtn = isPlaying ? pauseButton : playButton

        const songTimeCounter = () => {
          if (currentProgress === 0) {
            return "0:00"
          }
          else return calcTrackTime(currentProgress - 1000)
        }

        const timeElapsed = Number(((currentProgress)/trackDuration * 500).toFixed(0))

        // const rangeSlide = (e) => {
        //   return e.target.value
        // }

        const [val, setVal] = useState(0)
        console.log(val)

        const progressScript = `linear-gradient(to right, #f50 ${val}%, #ccc ${val}%)`;
        

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
              <p className='song-start'>{songTimeCounter()}</p>
              {/* <div className='song-progress-bar' >
                <div className='song-expired' style={{width: timeElapsed}}/>
              </div> */}
              <div className="slidecontainer">
                <input className='slider' type="range" name="song-expired" min={0} max={100} value={val} onChange={e => setVal(e.target.value)} style={{background: progressScript}}/>
              </div>
              <p className='song-end'>{calcTrackTime(trackDuration)}</p>
            </div>
          </div>
        </section>
    )
}

export default MusicPlayer