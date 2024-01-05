import { useEffect, useState } from "react";
import changePlayerState from "./functions/changePlayerState";
import skipTrack from "./functions/skipTrack";
import seekToPosition from "./functions/seekToPosition";
import getQueue from "../Queue/functions/getQueue";
import TrackSlider from "./components/TrackSlider";

import playButton from "../../assets/svgs/player/play-button.svg";
import pauseButton from "../../assets/svgs/player/pause-button.svg";
import forwardButton from "../../assets/svgs/player/forward-button.svg";
import backButton from "../../assets/svgs/player/back-button.svg";

import "./styles/music-player.css";

function MusicPlayer({ token, currentTrack, setCurrentTrack, setQueue }) {
  // HANDLE SLIDER POSITION - BOTH MANUAL AND AUTOMATIC
  const [sliderVal, setSliderVal] = useState(0);
  const [manualSeekVal, setManualSeekVal] = useState();

  const togglePlayBtn = currentTrack.trackIsPlaying ? pauseButton : playButton;
  const timeElapsed = Number(((currentTrack.trackProgress / currentTrack.trackDuration) * 100).toFixed(0));

  useEffect(() => {
    setSliderVal(timeElapsed);
  }, [timeElapsed]);

  useEffect(() => {
    seekToPosition(token, manualSeekVal);
  }, [manualSeekVal, token]);

  // CHECK TO UPDATE QUEUE WHEN TRACK CHANGES
  useEffect(() => {
    if (sliderVal >= 1 || sliderVal <= 3) {
      getQueue(token, setQueue)
    }
  })

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
      <TrackSlider currentTrack={currentTrack} sliderVal={sliderVal} setSliderVal={setSliderVal} setManualSeekVal={setManualSeekVal} />
    </section>
  );
}

export default MusicPlayer;
