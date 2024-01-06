import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import getAlbum from "./functions/getAlbum";
import convertMsToTime from "../../shared-functions/convertMsToTime";
import albumTimeinMs from "../../shared-functions/albumTimeinMs";
import getYear from "../../shared-functions/getYear";
import sleep from "../../shared-functions/sleep";
import dynamicGradient from "../../ColorThief/dynamicGradient";

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
      const getArtist = async () => {
        const { data } = await axios.get(
          `https://api.spotify.com/v1/artists/${artistId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        //   console.log(data)
        setArtistInfo({
          name: data.name,
          img: data.images[0].url,
        });
      };
      getArtist();
    }, [artistId, token]);

    sleep(100).then(() => {
      dynamicGradient(albumInfo);
    });

    return (
        <section className="album-page--container grid">
            <div className="album-page--banner grid">
                <div className="album-page--banner-img-container">
                    {albumInfo.img ? <img className="album-page--img" src={albumInfo.img} alt={`${albumInfo.name}-image`} /> : <div className="album-page--img-none"></div>}
                </div>
                <div className="album-page--banner-info-container grid">
                    <p className="album-page--album-type">{albumInfo.type}</p>
                    <p className="album-page--album-name">{albumInfo.name}</p>
                    <div className="album-page--album-overview-container grid">
                        <div className="album-overview-artist-img-container">
                            {artistInfo.img ? <img src={artistInfo.img} alt={`${artistInfo.name}-image`} /> : <div></div>}
                        </div>
                        <p className="album-overview-artist-name">{artistInfo.name}</p>
                        <span className="middot">&middot;</span>
                        <p className="album-overview-release-year"> {getYear(albumInfo.releaseDate)} </p>
                        <span className="middot">&middot;</span>
                        <p className="album-overview-total-tracks">{`${albumInfo.totalTracks} songs, ${convertMsToTime(albumTimeinMs(albumTracksArr))}`}</p>
                    </div>
                </div>
            </div>
            <div className="album-page--controls"></div>
            <div className="album-page--tracks"></div>
            <div className="album-page--more"></div>
        </section>
    )
}

export default Album