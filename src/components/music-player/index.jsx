import { useEffect, useState } from "react";
import axios from "axios";
import changePlayerState from "./functions/changePlayerState";
import skipTrack from "./functions/skipTrack";

import playButton from "../../assets/svgs/player/play-button.svg"
import pauseButton from "../../assets/svgs/player/pause-button.svg"
import forwardButton from "../../assets/svgs/player/forward-button.svg"
import backButton from "../../assets/svgs/player/back-button.svg"

import "./styles/music-player.css"

function MusicPlayer({ token, currentTrack, setCurrentTrack }) {

        // CALCULATE TRACK TIME IN 00:00 FORMAT
        const calcTrackTime = (ms) => {
          const minutes = Math.floor(ms / 60000);
          const seconds = ((ms % 60000) / 1000).toFixed(0);
          return (
            seconds == 60 ?
            (minutes+1) + ":00" :
            minutes + ":" + (seconds < 10 ? "0" : "") + seconds
          )
        }
        
        const togglePlayBtn = currentTrack.trackIsPlaying ? pauseButton : playButton

        const timeElapsed = Number(((currentTrack.trackProgress)/currentTrack.trackDuration * 100).toFixed(0))

        // RENDER CURRENT TRACK TIME
        const renderCurrentTrackTime = () => {
          const currentTime = currentTrack.trackProgress
          if (currentTime === null) return "0:00"
          if (currentTime === 0) return "0:00"
          else if (currentTime < 0) return "0:00"
          else return calcTrackTime(currentTime)
        }

        // HANDLE SLIDER POSITION - BOTH MANUAL AND AUTOMATIC
        const [sliderVal, setSliderVal] = useState(0)
        const [manualSeekVal, setManualSeekVal] = useState()

        useEffect(() => {
          setSliderVal(timeElapsed)
        }, [timeElapsed])

        // API CALL TO SEEK TO POSITION
        useEffect(() => {
          const seekToPosition = async () => {
            await axios.put(
              "https://api.spotify.com/v1/me/player/seek", {},
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
                params: {
                  position_ms: manualSeekVal,
                },
              }
            );
          };
          seekToPosition()
        }, [manualSeekVal, token])
          

        const calcSeekPosition = async (slidebarPosition) => {
          const currentTimeinMs = (slidebarPosition / 100) * currentTrack.trackDuration
          setManualSeekVal(Number(currentTimeinMs.toFixed(0)))
        }

    return (
        <section>
          <h3>Playback</h3>    
          <div className='song-player-container grid'>
            <div className='song-controls grid'>
              <div className='back-btn' onClick={() => skipTrack(token, currentTrack, "previous")}>
                <img src={backButton} alt="skip back button" />
              </div>
              <div className='play-btn' onClick={() => changePlayerState(token, currentTrack, setCurrentTrack)}>
                <img src={togglePlayBtn} alt="play/pause button" />
              </div>
              <div className='forward-btn' onClick={() => skipTrack(token, "next")}>
                <img src={forwardButton} alt="skip forward button" />
              </div>
            </div>
            <div className='song-progress-bar-container grid'>
              <p className='song-start'>{renderCurrentTrackTime()}</p>
              <div className="slide-container">
                <input className='slider' type="range" name="song-expired" min={0} max={100} step={1} value={sliderVal} onChange={e => {setSliderVal(e.target.value)}} onMouseUp={e => calcSeekPosition(e.target.value)} />
              </div>
              <p className='song-end'>{calcTrackTime(currentTrack.trackDuration)}</p>
            </div>
          </div>
        </section>
    )
}

export default MusicPlayer