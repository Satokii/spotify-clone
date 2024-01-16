import axios from "axios";
import { useEffect, useState } from "react";
import { usePalette } from "react-palette";
import sleep from "../../shared-functions/sleep";
import palletGradientPlaylist from "../../ColorThief/paletteGradientPlaylist";
import PlaylistTopNav from "./components/PlaylistTopNav"
import PlaylistBanner from "./components/PlaylistBanner";

import "./styles/playlist-page.css"

function Playlist({ token, setToken }) {

    const [playlistInfo, setPlaylistInfo] = useState({})
    const [playlistTracks, setPlaylistTracks] = useState([])

    useEffect(() => {
        const getPlaylist = async () => {
            const { data } = await axios.get(
              `https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            // console.log(data)
            setPlaylistTracks(data.tracks.items)
            setPlaylistInfo({
                name: data.name,
                img: data.images[0].url,
                description: data.description,
                followers: data.followers.total,
                totalTracks: data.tracks.total,
                type: data.type,
                isPublic: data.public,
                owner: data.owner.display_name
            })
        };
        getPlaylist()
    }, [token])

    const { data } = usePalette(playlistInfo.img)
    sleep(0).then(() => palletGradientPlaylist(data))

    // console.log(playlistInfo)
    // console.log(playlistTracks)

    return (
        <div className="scrollbar-playlist">
            <section className="playlist-page--container grid">
                <PlaylistTopNav setToken={setToken} />
                <PlaylistBanner playlistInfo={playlistInfo} playlistTracks={playlistTracks} />
                <div className="playlist-page--sub-container grid">sub container</div>
            </section>
        </div>
    )
}

export default Playlist