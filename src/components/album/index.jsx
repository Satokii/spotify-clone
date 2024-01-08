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
      const getArtistAlbums = async () => {
        const { data } = await axios.get(
          `https://api.spotify.com/v1/artists/${artistId}/albums`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
              limit: 6,
              include_groups: "album,single"
            },
          }
        );
          const { items } = data
          console.log(items)
          setArtistAlbums(items)
      };
    getArtistAlbums()
    }, [])

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
                {artistAlbums.map(album =>
                  <div className="album-page--more grid" key={album.id}>
                    <div className="album-overview--more-img">
                      {album.images.length ? (
                        <img src={album.images[0].url} alt={album.name} />
                        ) : (<div></div>
                      )}
                    </div>
                    <div className="album-overview-more-name">{album.name}</div>
                    <div>{getYear(album.release_date)}</div>
                  </div>
                )}
              </div>
        </section>
    )
}

export default Album