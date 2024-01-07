import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getAlbum from "./functions/getAlbum";
import getArtist from "../artist/functions/getArtist";
import sleep from "../../shared-functions/sleep";
import dynamicGradient from "../../ColorThief/dynamicGradient";

import AlbumBanner from "./components/AlbumBanner";
import AlbumControls from "./components/AlbumControls";
import AlbumTracks from "./components/AlbumTracks";

import "./styles/album-page.css"

function Album({ token }) {

    const [albumInfo, setAlbumInfo] = useState({})
    const [artistInfo, setArtistInfo] = useState({});
    const { albumId, artistId } = useParams()
    const [albumTracksArr, setAlbumTracksArr] = useState([])
    const [copyrights, setCopyrights] = useState([])
    // console.log(albumTracksArr)

    useEffect(() => {
      sleep(0).then(() => getAlbum(token, albumId, setAlbumTracksArr, setAlbumInfo, setCopyrights))
    }, [albumId, token]);

    useEffect(() => {
      sleep(0).then(() => getArtist(token, artistId, setArtistInfo))
    }, [artistId, token]);

    sleep(0).then(() => dynamicGradient(albumInfo))

    return (
        <section className="album-page--container grid">
            <AlbumBanner albumInfo={albumInfo} artistInfo={artistInfo} albumTracksArr={albumTracksArr} />
            <div className="album-page--sub-container grid">
              <AlbumControls />
              <AlbumTracks albumTracksArr={albumTracksArr} albumInfo={albumInfo} artistInfo={artistInfo} copyrights={copyrights} />
              <div className="album-page--more grid"></div>
            </div>
        </section>
    )
}

export default Album