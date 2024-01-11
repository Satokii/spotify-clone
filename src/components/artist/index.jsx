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
    const [artistBio, setArtistBio] = useState('')
    const [artistUuid, setArtistUuid] = useState('')
    // const [albumTracksArr, setAlbumTracksArr] = useState([])
    // const [copyrights, setCopyrights] = useState([])
    // const [artistAlbums, setArtistAlbums] = useState([])
    // const { data } = usePalette(albumInfo.img)

    useEffect(() => {
        const getArtistDetails = async () => {
            const { data } = await axios.get(
              `https://customer.api.soundcharts.com/api/v2.9/artist/by-platform/spotify/6qqNVTkY8uBg9cP3Jd7DAH`,
              {
                headers: {
                "x-app-id": "soundcharts",
                "x-api-key": "soundcharts"
                },
              }
            );
              console.log(data)
          };
          getArtistDetails()
    })
   

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