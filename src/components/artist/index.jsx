import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import getArtist from "./functions/getArtist";
import sleep from "../../shared-functions/sleep";
import VerifiedIcon from "../../assets/svgs/main-app/verified-icon.svg"
import palletGradientArtist from "../../ColorThief/paletteGradientArtist";

import "./styles/artist-page.css"
import { usePalette } from "react-palette";

function Artist({ token }) {

    // const [albumInfo, setAlbumInfo] = useState({})
    const [artistInfo, setArtistInfo] = useState({});
    const { artistId } = useParams()
    // const [albumTracksArr, setAlbumTracksArr] = useState([])
    // const [copyrights, setCopyrights] = useState([])
    // const [artistAlbums, setArtistAlbums] = useState([])
    // const { data } = usePalette(albumInfo.img)
    // console.log(artistInfo)


    useEffect(() => {
        sleep(0).then(() => getArtist(token, artistId, setArtistInfo))
    }, [artistId, token])

    const { data } = usePalette(artistInfo.img)
    sleep(0).then(() => palletGradientArtist(data))

    return (
        <section className="artist-page--container grid">
            <div className="artist-page--banner-container grid" style={{ backgroundImage: `url(${artistInfo.img})`, backgroundPosition: "50% 30%", backgroundRepeat: "no-repeat", backgroundSize: "70%"}}>
                <div className="artist-banner--verified-container grid">
                    <img className="artist-banner--verified-img" src={VerifiedIcon} alt="verified icon" />
                    <p className="artist-banner--verified-text">Verified Artist</p>
                </div>
                <div className="artist-banner--artist-name">{artistInfo.name}</div>
                <div className="artist-banner--artist-followers">{`${artistInfo.followers} followers`}</div>
            </div>
            <div className="artist-page--sub-container grid">
                <div>Artist Options</div>
                <div>Popular Tracks</div>
                <div>Discography</div>
                <div>Related Artists</div>
                <div>Appears on (compilation)</div>
            </div>
        </section>
    )
}

export default Artist