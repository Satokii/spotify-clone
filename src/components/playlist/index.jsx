import axios from "axios";
import { useEffect, useState } from "react";
import PlaylistTopNav from "./components/PlaylistTopNav"

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
            console.log(data)
            setPlaylistTracks(data.tracks.items)
            setPlaylistInfo({
                name: data.name,
                img: data.images[0].url,
                description: data.description,
                followers: data.followers.total,
                type: data.type,
                isPublic: data.public,
                owner: data.owner.display_name
            })
        };
        getPlaylist()
    }, [token])


    return (
        <div className="scrollbar-playlist">
            <section className="playlist-page--container grid">
                <PlaylistTopNav setToken={setToken} />
                <div className="playlist-page--banner">playlist banner</div>
                <div className="playlist-page--sub-container grid">sub container</div>
            </section>
        </div>
    )
}

export default Playlist