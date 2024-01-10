import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePalette } from "react-palette";
import getAlbum from "./functions/getAlbum";
import getArtist from "../artist/functions/getArtist";
import sleep from "../../shared-functions/sleep";
import dynamicGradient from "../../ColorThief/dynamicGradient";

import AlbumBanner from "./components/AlbumBanner";
import AlbumControls from "./components/AlbumControls";
import AlbumTracks from "./components/AlbumTracks";
import AlbumMoreByArtist from "./components/AlbumMoreByArtist";

import "./styles/album-page.css"

function Album({ token }) {

    const [albumInfo, setAlbumInfo] = useState({})
    const [artistInfo, setArtistInfo] = useState({});
    const { albumId, artistId } = useParams()
    const [albumTracksArr, setAlbumTracksArr] = useState([])
    const [copyrights, setCopyrights] = useState([])

    const [artistAlbums, setArtistAlbums] = useState([])
    // console.log(albumTracksArr)
    const { data } = usePalette(albumInfo.img)


    useEffect(() => {
      sleep(0).then(() => getAlbum(token, albumId, setAlbumTracksArr, setAlbumInfo, setCopyrights))
    }, [albumId, token]);

    useEffect(() => {
      sleep(0).then(() => getArtist(token, artistId, setArtistInfo))
    }, [artistId, token]);

    // sleep(0).then(() => dynamicGradient(albumInfo))
    sleep(0).then(() => colourTest(albumInfo))


    const colourTest = () => {
      // const imageColour = data.lightMuted
      const lightImgColour = data.lightMuted
      const darkImgColour = data.vibrant
      console.log('light:', lightImgColour)
      console.log('dark:', darkImgColour)

      let mixedImgColour = "#";

      for (let i = 0; i < 3; i++) {
        let sub1 = lightImgColour.substring(1 + 2 * i, 3 + 2 * i);
        let sub2 = darkImgColour.substring(1 + 2 * i, 3 + 2 * i);
        let v1 = parseInt(sub1, 16);
        let v2 = parseInt(sub2, 16);
        let v = Math.floor((v1 + v2) / 2);
        let sub = v.toString(16).toUpperCase();
        let padsub = ("0" + sub).slice(-2);
        mixedImgColour += padsub;
      }
      // console.log('mixed:', c)



      let bannerBackground = document.querySelector(".album-page--banner");
      let albumBackground = document.querySelector(".album-page--sub-container");
      let foundColour = `${mixedImgColour}`
      let darkFoundColour = `${mixedImgColour}70`
      let darkerFoundColour = `${mixedImgColour}55`
      let evenDarkerFoundColour = `${mixedImgColour}33`
      bannerBackground.style.background = `${foundColour}`  
      albumBackground.style.background = `linear-gradient(${darkFoundColour}, ${darkerFoundColour} 10%, ${evenDarkerFoundColour} 20%, #1a1a1a 42%, #121212 60%)`
    }

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