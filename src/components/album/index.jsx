import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import convertMsToTime from "../../shared-functions/convertMsToTime";
import albumTimeinMs from "../../shared-functions/albumTimeinMs";
import getYear from "../../shared-functions/getYear";
import ColorThief from '../../../node_modules/colorthief/dist/color-thief.mjs'

import "./styles/album-page.css"

function Album({ token }) {

    const [albumInfo, setAlbumInfo] = useState({})
    const { albumId, artistId } = useParams()
    const [albumTracksArr, setAlbumTracksArr] = useState([])

    // const bg = document.querySelector(".album-page--container")

    useEffect(() => {
        const getAlbum = async () => {
          const { data } = await axios.get(
            `https://api.spotify.com/v1/albums/${albumId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
              params: {
                id: albumId,
              }
            }
          );
        //   console.log(data)
          setAlbumTracksArr(data.tracks.items)
          setAlbumInfo({
            name: data.name,
            img: data.images[0].url,
            type: data.album_type,
            releaseDate: data.release_date,
            totalTracks: data.total_tracks,
            tracks: data.tracks.items,
            time: data.tracks.items.map(track => track.duration_ms)
          })
        };
          getAlbum();
      }, [albumId, token]);

      const [artistInfo, setArtistInfo] = useState({})

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
          })
        };
          getArtist();
      }, [artistId, token]);

            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
              
            sleep(100).then(() => {
                const colorThief = new ColorThief();
                const img = new Image();
                img.addEventListener('load', function() {
                    colorThief.getColor(img);
                });
                img.crossOrigin = 'Anonymous';
                img.src = `${albumInfo.img}`
                let background = document.querySelector(".album-page--container ");
                let color = colorThief.getColor(img);
                let foundColor = "rgb(" + color + ")"
                background.style.background = `linear-gradient(${foundColor}, #121212)`                
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