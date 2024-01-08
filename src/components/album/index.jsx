import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getAlbum from "./functions/getAlbum";
import getArtist from "../artist/functions/getArtist";
import sleep from "../../shared-functions/sleep";
import dynamicGradient from "../../ColorThief/dynamicGradient";
import axios from "axios";

import AlbumBanner from "./components/AlbumBanner";
import AlbumControls from "./components/AlbumControls";
import AlbumTracks from "./components/AlbumTracks";
import AlbumMoreByArtist from "./components/AlbumMoreByArtist";

import "./styles/album-page.css"
import getYear from "../../shared-functions/getYear";

function Album({ token }) {

    const [albumInfo, setAlbumInfo] = useState({})
    const [artistInfo, setArtistInfo] = useState({});
    const { albumId, artistId } = useParams()
    const [albumTracksArr, setAlbumTracksArr] = useState([])
    const [copyrights, setCopyrights] = useState([])

    const [artistAlbums, setArtistAlbums] = useState([])
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
              <AlbumMoreByArtist token={token} artistId={artistId} artistInfo={artistInfo} artistAlbums={artistAlbums} setArtistAlbums={setArtistAlbums} />
            </div>
        </section>
    )
}

export default Album