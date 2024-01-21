import { useEffect, useState } from "react";
import { usePalette } from "react-palette";
import axios from "axios";
import sleep from "../../shared-functions/sleep";
import paletteGradientLikedSongs from "../../ColorThief/paletteGradientLikedSongs";
import LikedSongsImg from "../../assets/images/liked-songs-img.png"
import LikedSongsTopNav from "./components/LikedSongsTopNav"
import LikedSongsBanner from "./components/LikedSongsBanner";
import LikedSongsControls from "./components/LikedSongsControls";
import LikedSongsTracks from "./components/LikedSongsTracks";

import "./styles/liked-songs.css"

function LikedSongs({ token, setToken }) {

    const [likedSongsInfo, setLikedSongsInfo] = useState([])
    const [likedSongs, setLikedSongs] = useState([])

    useEffect(() => {
        const getLikedSongs = async () => {
            const { data } = await axios.get(
              `https://api.spotify.com/v1/me/tracks`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            console.log(data)
            setLikedSongsInfo({trackNum: data.total})
            setLikedSongs(data.items)
        };
        getLikedSongs()
    }, [token])

    const { data } = usePalette(LikedSongsImg)
    sleep(0).then(() => paletteGradientLikedSongs(data))

    return (
        <div className="scrollbar-liked-songs">
        <section className="liked-songs--container grid">
            <LikedSongsTopNav setToken={setToken} />
            <LikedSongsBanner likedSongsInfo={likedSongsInfo} />
            <div className="liked-songs--sub-container grid">
                <LikedSongsControls />
                <LikedSongsTracks likedSongs={likedSongs} />
            </div>
        </section>
        </div>
    )
}

export default LikedSongs