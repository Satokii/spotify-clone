import { useEffect, useState } from "react";
import axios from "axios";

import playButton from "../../assets/svgs/player/play-button.svg"
import pauseButton from "../../assets/svgs/player/pause-button.svg"
import forwardButton from "../../assets/svgs/player/forward-button.svg"
import backButton from "../../assets/svgs/player/back-button.svg"

import "./styles/music-player.css"

function MusicPlayer({ token, currentTrack, setCurrentTrack }) {
          
        // API CALL TO PLAY/PAUSE TRACK
        const changePlayerState = async () => {
          const playState = currentTrack.trackIsPlaying ? "pause" : "play"
          await axios.put(  
            `https://api.spotify.com/v1/me/player/${playState}`, {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
              },
            }
          );
          const updatedCurrentTrackState = {
            ...currentTrack,
            trackIsPlaying: !currentTrack.trackIsPlaying
          }
        setCurrentTrack(updatedCurrentTrackState)
        };

        // API CALL TO SKIP TRACK
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
          const currentTime = currentTrack.trackProgress - 1000
          if (currentTrack.trackProgress === 0) return "0:00"
          else if (currentTime < 0) return "0:00"
          else return calcTrackTime(currentTime)
        }

        // HANDLE SLIDER POSITION - BOTH MANUAL AND AUTOMATIC
        const [sliderVal, setSliderVal] = useState(0)
        const [manualSeekVal, setManualSeekVal] = useState(timeElapsed)

        useEffect(() => {
          setSliderVal(timeElapsed)
        }, [timeElapsed])

        // API CALL TO SEEK TO POSITION
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

        const calcSeekPosition = (slidebarPosition) => {
          const currentTimeinMs = (slidebarPosition / 100) * currentTrack.trackDuration
          setManualSeekVal(Number(currentTimeinMs.toFixed(0)))
          seekToPosition()
        }

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