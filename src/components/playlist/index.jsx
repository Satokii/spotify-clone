import axios from "axios";
import { useEffect, useState } from "react";
import { usePalette } from "react-palette";
import getPlaylist from "./functions/getPlaylist";
import sleep from "../../shared-functions/sleep";
import palletGradientPlaylist from "../../ColorThief/paletteGradientPlaylist";
import PlaylistTopNav from "./components/PlaylistTopNav"
import PlaylistBanner from "./components/PlaylistBanner";

import "./styles/playlist-page.css"
import { useParams } from "react-router-dom";

function Playlist({ token, setToken }) {

    const { playlistId } = useParams()

    const [playlistInfo, setPlaylistInfo] = useState({})
    const [playlistTracks, setPlaylistTracks] = useState([])

    useEffect(() => {
        sleep(0).then(() => getPlaylist(token, playlistId, setPlaylistInfo, setPlaylistTracks))
    }, [playlistId, token])

    const { data } = usePalette(playlistInfo.img)
    sleep(0).then(() => palletGradientPlaylist(data))

    return (
        <div className="scrollbar-playlist">
            <section className="playlist-page--container grid">
                <PlaylistTopNav setToken={setToken} />
                <PlaylistBanner playlistInfo={playlistInfo} playlistTracks={playlistTracks} />
                <div className="playlist-page--sub-container grid">
                    <div className="playlist-page--controls"></div>
                    <div className="playlist-page--tracks"></div>
                </div>
            </section>
        </div>
    )
}

export default Playlist