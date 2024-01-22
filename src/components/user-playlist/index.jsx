import { useEffect, useState } from "react"
import axios from "axios"
import { usePalette } from "react-palette"
import sleep from "../../shared-functions/sleep"
import paletteGradientUserPlaylist from "../../ColorThief/paletteGradientUserPlaylist"
import UserPlaylistTopNav from "./components/UserPlaylistTopNav"
import UserPlaylistBanner from "./components/UserPlaylistBanner"
import UserPlaylistControls from "./components/UserPlaylistControls"
import UserPlaylistTracks from "./components/UserPlaylistTracks"

import "./styles/user-playlist.css"

function UserPlaylist({ token, setToken }) {

    const [userPlaylistInfo, setUserPlaylistInfo] = useState({})
    const [userPlaylistTracks, setUserPlaylistTracks] = useState([])

    useEffect(() => {
        const getUserPlaylistInfo = async () => {
            const { data } = await axios.get(
              `https://api.spotify.com/v1/playlists/79r17ACpIf9hxSqtJOIESy`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
                params: {
                    limit: 20
                }
              }
            )
            console.log(data)
            setUserPlaylistInfo({
                owner: data.owner.display_name,
                name: data.name,
                img: data.images[0].url,
                numSongs: data.tracks.total,
                isPublic: data.public
            })
        };
        getUserPlaylistInfo()
    }, [token])

    useEffect(() => {
    let playlistURL = `https://api.spotify.com/v1/playlists/79r17ACpIf9hxSqtJOIESy/tracks`
    let userPlaylistSongs = []
    let combinedPlaylistSongs = []
        const getUserPlaylistTracks = async () => {
            const { data } = await axios.get(playlistURL,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
                params: {
                    limit: 50
                }
              }
            )
            userPlaylistSongs.push(data.items)
            if (data.next !== null) {
                playlistURL = data.next
                getUserPlaylistTracks()
            }
            else {
                userPlaylistSongs.forEach(array => {
                    combinedPlaylistSongs = combinedPlaylistSongs.concat(array)
                })
            }
            setUserPlaylistTracks(combinedPlaylistSongs)
        };
        getUserPlaylistTracks()
    }, [token])

    const { data } = usePalette(userPlaylistInfo.img)
    useEffect(() => {
        sleep(0).then(() => paletteGradientUserPlaylist(data))
    }, [data])

    return (
        <div className="scrollbar-user-playlist">
        <section className="user-playlist--container grid">
            <UserPlaylistTopNav setToken={setToken} />
            <UserPlaylistBanner userPlaylistInfo={userPlaylistInfo} userPlaylistTracks={userPlaylistTracks} />
            <div className="user-playlist--sub-container grid">
                <UserPlaylistControls />
                <UserPlaylistTracks userPlaylistTracks={userPlaylistTracks} />
            </div>
        </section>
        </div>
    )
}

export default UserPlaylist