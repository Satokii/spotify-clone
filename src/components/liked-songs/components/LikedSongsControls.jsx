import { useState } from "react"
import MainPlayBtn from "../../../assets/svgs/main-app/main-play-btn.svg"
import MainPauseBtn from "../../../assets/svgs/main-app/main-pause-btn.svg"
import GreenShuffleBtn from "../../../assets/svgs/main-app/shuffle-green.svg"
import GrayShuffleBtn from "../../../assets/svgs/main-app/shuffle-gray.svg"
import GreenHeart from "../../../assets/svgs/main-app/heart-green.svg"
import GrayHeart from "../../../assets/svgs/main-app/heart-gray.svg"
import MenuDots from "../../../assets/svgs/main-app/menu-dots.svg"

import "../styles/liked-songs-controls.css"

function LikedSongsControls() {
    const [play, setPlay] = useState(false);
    const [shuffle, setShuffle] = useState(false);
    const [saved, setSaved] = useState(false);
  
    const togglePlayAlbum = () => {
      if (!play) setPlay(true);
      else setPlay(false);
    };
  
    const toggleShuffle = () => {
      if (!shuffle) setShuffle(true);
      else setShuffle(false);
    };
  
    const toggleSaved = () => {
      if (!saved) setSaved(true);
      else setSaved(false);
    };
  
    return (
      <div className="liked-songs--controls grid">
        {play ? (
          <img
            className="liked-songs--pause-btn"
            src={MainPauseBtn}
            alt="pause btn green"
            onClick={togglePlayAlbum}
          />
        ) : (
          <img
            className="liked-songs--play-btn"
            src={MainPlayBtn}
            alt="play btn green"
            onClick={togglePlayAlbum}
          />
        )}
        {shuffle ? (
          <img
            className="liked-songs--shuffle-btn-green"
            src={GreenShuffleBtn}
            alt="shuffle btn green"
            onClick={toggleShuffle}
          />
        ) : (
          <img
            className="liked-songs--shuffle-btn-gray"
            src={GrayShuffleBtn}
            alt="shuffle btn gray"
            onClick={toggleShuffle}
          />
        )}
        {saved ? (
          <img
            className="liked-songs--heart-green"
            src={GreenHeart}
            alt="heart green"
            onClick={toggleSaved}
          />
        ) : (
          <img
            className="liked-songs--heart-gray"
            src={GrayHeart}
            alt="heart gray"
            onClick={toggleSaved}
          />
        )}
        <img className="liked-songs--menu-dots" src={MenuDots} alt="menu dots" />
      </div>
    )
}

export default LikedSongsControls