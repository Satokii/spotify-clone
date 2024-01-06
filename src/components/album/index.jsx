import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getAlbum from "./functions/getAlbum";
import getArtist from "../artist/functions/getArtist";
import sleep from "../../shared-functions/sleep";
import dynamicGradient from "../../ColorThief/dynamicGradient";

import AlbumBanner from "./components/AlbumBanner";

import "./styles/album-page.css"

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
            <div className="album-page--controls"></div>
            <div className="album-page--tracks"></div>
            <div className="album-page--more"></div>
        </section>
    )
}

export default Album