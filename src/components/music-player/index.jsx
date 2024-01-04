import { useEffect, useState } from "react";
import changePlayerState from "./functions/changePlayerState";
import skipTrack from "./functions/skipTrack";
import calcTrackTime from "./functions/calcTrackTime";
import renderCurrentTrackTime from "./functions/renderCurrentTrackTime";
import seekToPosition from "./functions/seekToPosition";
import calcSeekPosition from "./functions/calcSeekPosition";

import playButton from "../../assets/svgs/player/play-button.svg";
import pauseButton from "../../assets/svgs/player/pause-button.svg";
import forwardButton from "../../assets/svgs/player/forward-button.svg";
import backButton from "../../assets/svgs/player/back-button.svg";

import "./styles/music-player.css";

function MusicPlayer({ token, currentTrack, setCurrentTrack }) {
  // HANDLE SLIDER POSITION - BOTH MANUAL AND AUTOMATIC
  const [sliderVal, setSliderVal] = useState(0);
  const [manualSeekVal, setManualSeekVal] = useState();

  const togglePlayBtn = currentTrack.trackIsPlaying ? pauseButton : playButton;
  const timeElapsed = Number(
    ((currentTrack.trackProgress / currentTrack.trackDuration) * 100).toFixed(0)
  );

  useEffect(() => {
    setSliderVal(timeElapsed);
  }, [timeElapsed]);

  useEffect(() => {
    seekToPosition(token, manualSeekVal);
  }, [manualSeekVal, token]);

  return (
    <section className="song-player-container grid">
      <div className="song-controls grid">
        <div
          className="back-btn"
          onClick={() => skipTrack(token, currentTrack, "previous")}
        >
          <img src={backButton} alt="skip back button" />
        </div>
        <div
          className="play-btn"
          onClick={() =>
            changePlayerState(token, currentTrack, setCurrentTrack)
          }
        >
          <img src={togglePlayBtn} alt="play/pause button" />
        </div>
        <div className="forward-btn" onClick={() => skipTrack(token, currentTrack, "next")}>
          <img src={forwardButton} alt="skip forward button" />
        </div>
      </div>
      <div className="song-progress-bar-container grid">
        <p className="song-start">{renderCurrentTrackTime(currentTrack)}</p>
        <div className="slide-container">
          <input
            className="slider"
            type="range"
            name="song-expired"
            min={0}
            max={100}
            step={1}
            value={sliderVal}
            onChange={(e) => {
              setSliderVal(e.target.value);
            }}
            onMouseUp={(e) =>
              calcSeekPosition(e.target.value, currentTrack, setManualSeekVal)
            }
          />
        </div>
        <p className="song-end">{calcTrackTime(currentTrack.trackDuration)}</p>
      </div>
    </section>
  );
}

export default MusicPlayer;
