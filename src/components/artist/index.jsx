import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import getArtist from "./functions/getArtist";
import getArtistTopTracks from "./functions/getArtistTopTracks";
import getArtistTop5Tracks from "./functions/getArtistTop5Tracks";
import ArtistBanner from "./components/ArtistBanner";
import ArtistControls from "./components/ArtistControls";
import ArtistPopularTracks from "./components/ArtistPopularTracks";
import ArtistDiscography from "./components/ArtistDiscography";
import sleep from "../../shared-functions/sleep";
import palletGradientArtist from "../../ColorThief/paletteGradientArtist";

import "./styles/artist-page.css"
import { usePalette } from "react-palette";

function Artist({ token }) {

    const [artistInfo, setArtistInfo] = useState({});
    const { artistId } = useParams()
    const [topTracksArr, setTopTracksArr] = useState([])
    const [top5TracksArr, setTop5TracksArr] = useState([])
    // const [copyrights, setCopyrights] = useState([])
    // const [artistAlbums, setArtistAlbums] = useState([])
    // const { data } = usePalette(albumInfo.img)
    
    useEffect(() => {
        sleep(0).then(() => getArtist(token, artistId, setArtistInfo))
    }, [artistId, token])

    useEffect(() => {
        sleep(0).then(() => getArtistTopTracks(token, artistId, setTopTracksArr))
    }, [artistId, token])

    useEffect(() => {
        sleep(0).then(() => getArtistTop5Tracks(token, artistId, setTop5TracksArr))
    }, [artistId, token])
    
    const { data } = usePalette(artistInfo.img)
    sleep(0).then(() => palletGradientArtist(data))

    return (
        <section className="artist-page--container grid">
            <ArtistBanner artistInfo={artistInfo} />
            <div className="artist-page--sub-container grid">
                <ArtistControls />
                <ArtistPopularTracks topTracksArr={topTracksArr} top5TracksArr={top5TracksArr} />
                <ArtistDiscography />
                <div>Related Artists</div>
                <div>Appears on (compilation)</div>
            </div>
        </section>
    )
}

export default Artist