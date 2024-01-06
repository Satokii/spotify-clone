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

    sleep(100).then(() => {
      dynamicGradient(albumInfo);
    });

    return (
        <section className="album-page--container grid">
            <AlbumBanner albumInfo={albumInfo} artistInfo={artistInfo} albumTracksArr={albumTracksArr} />
            <div className="album-page--controls grid">
              <img className="album-page--play-btn" src={MainPlayBtn} alt="play btn green" />
              <img className="album-page--shuffle-btn-gray" src={GrayShuffleBtn} alt="" />
              <img className="album-page--shuffle-btn-green" src={GreenShuffleBtn} alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
            <div className="album-page--tracks"></div>
            <div className="album-page--more"></div>
        </section>
    )
}

export default Album