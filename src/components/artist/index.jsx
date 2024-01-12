import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import getArtist from "./functions/getArtist";
import getArtistTopTracks from "./functions/getArtistTopTracks";
import ArtistBanner from "./components/ArtistBanner";
import ArtistControls from "./components/ArtistControls";
import ArtistPopularTracks from "./components/ArtistPopularTracks";
import sleep from "../../shared-functions/sleep";
import palletGradientArtist from "../../ColorThief/paletteGradientArtist";

import "./styles/artist-page.css"
import { usePalette } from "react-palette";

function Artist({ token }) {

    // const [albumInfo, setAlbumInfo] = useState({})
    const [artistInfo, setArtistInfo] = useState({});
    const { artistId } = useParams()
    const [topTrackArr, setTopTracksArr] = useState([])
    // const [copyrights, setCopyrights] = useState([])
    // const [artistAlbums, setArtistAlbums] = useState([])
    // const { data } = usePalette(albumInfo.img)
    // console.log(artistInfo)
    console.log(artistId)
    
    useEffect(() => {
        sleep(0).then(() => getArtist(token, artistId, setArtistInfo))
    }, [artistId, token])

    useEffect(() => {
        sleep(0).then(() => getArtistTopTracks(token, artistId, setTopTracksArr))
    }, [artistId, token])

    const { data } = usePalette(artistInfo.img)
    sleep(0).then(() => palletGradientArtist(data))

    return (
        <section className="artist-page--container grid">
            <ArtistBanner artistInfo={artistInfo} />
            <div className="artist-page--sub-container grid">
                <ArtistControls />
                <ArtistPopularTracks topTrackArr={topTrackArr} />
                <div>Discography</div>
                <div>Related Artists</div>
                <div>Appears on (compilation)</div>
            </div>
        </section>
    )
}

export default Artist