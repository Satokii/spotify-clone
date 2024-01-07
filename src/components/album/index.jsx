import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getAlbum from "./functions/getAlbum";
import getArtist from "../artist/functions/getArtist";
import sleep from "../../shared-functions/sleep";
import dynamicGradient from "../../ColorThief/dynamicGradient";

import AlbumBanner from "./components/AlbumBanner";
import MainPlayBtn from "../../assets/svgs/main-app/main-play-btn.svg"
import MainPauseBtn from "../../assets/svgs/main-app/main-pause-btn.svg"
import GreenShuffleBtn from "../../assets/svgs/main-app/shuffle-green.svg"
import GrayShuffleBtn from "../../assets/svgs/main-app/shuffle-gray.svg"
import GreenHeart from "../../assets/svgs/main-app/heart-green.svg"
import GrayHeart from "../../assets/svgs/main-app/heart-gray.svg"
import MenuDots from "../../assets/svgs/main-app/menu-dots.svg"


import "./styles/album-page.css"
import "./styles/album-controls.css"

function Album({ token }) {

    const [albumInfo, setAlbumInfo] = useState({})
    const { albumId, artistId } = useParams()
    const [albumTracksArr, setAlbumTracksArr] = useState([])

    useEffect(() => {
      getAlbum(token, albumId, setAlbumTracksArr, setAlbumInfo);
    }, [albumId, token]);

    const [artistInfo, setArtistInfo] = useState({});

    useEffect(() => {
      getArtist(token, artistId, setArtistInfo);
    }, [artistId, token]);

    sleep(300).then(() => {
      dynamicGradient(albumInfo);
    });

    const [play, setPlay] = useState(false)
    const [shuffle, setShuffle] = useState(false)
    const [saved, setSaved] = useState(false)

    const togglePlayAlbum = () => {
      if (!play) setPlay(true)
      else setPlay(false)
    }

    const toggleShuffle = () => {
      if (!shuffle) setShuffle(true)
      else setShuffle(false)
    }

    const toggleSaved = () => {
      if (!saved) setSaved(true)
      else setSaved(false)
    }

    return (
        <section className="album-page--container grid">
            <AlbumBanner albumInfo={albumInfo} artistInfo={artistInfo} albumTracksArr={albumTracksArr} />
            <div className="album-page--controls grid">
              {play ?
              <img className="album-page--pause-btn" src={MainPauseBtn} alt="pause btn green" onClick={togglePlayAlbum} />
              : <img className="album-page--play-btn" src={MainPlayBtn} alt="play btn green" onClick={togglePlayAlbum} />
              }
              {shuffle ? 
                <img className="album-page--shuffle-btn-green" src={GreenShuffleBtn} alt="shuffle btn green" onClick={toggleShuffle} />
                : <img className="album-page--shuffle-btn-gray" src={GrayShuffleBtn} alt="shuffle btn gray" onClick={toggleShuffle} />
              }
              {saved ?
                <img className="album-page--heart-green" src={GreenHeart} alt="heart green" onClick={toggleSaved} />
                : <img className="album-page--heart-gray" src={GrayHeart} alt="heart gray" onClick={toggleSaved} />
              }
              <img className="album-page--menu-dots" src={MenuDots} alt="menu dots" />
            </div>
            <div className="album-page--tracks"></div>
            <div className="album-page--more grid"></div>
        </section>
    )
}

export default Album