import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import axios from "axios";
import getArtist from "./functions/getArtist";
import sleep from "../../shared-functions/sleep";

import "./styles/artist-page.css"

function Artist({ token }) {

    // const [albumInfo, setAlbumInfo] = useState({})
    const [artistInfo, setArtistInfo] = useState({});
    const { albumId, artistId } = useParams()
    // const [albumTracksArr, setAlbumTracksArr] = useState([])
    // const [copyrights, setCopyrights] = useState([])
    // const [artistAlbums, setArtistAlbums] = useState([])
    // const { data } = usePalette(albumInfo.img)


    useEffect(() => {
        sleep(0).then(() => getArtist(token, artistId, setArtistInfo))
    }, [artistId, token])

    // console.log(artistInfo)

    return (
        <section className="artist-page--container grid">
            <div>Banner</div>
            <div>Artist Options</div>
            <div>Popular Tracks</div>
            <div>Discography</div>
            <div>Related Artists</div>
            <div>Appears on (compilation)</div>
        </section>
    )
}

export default Artist