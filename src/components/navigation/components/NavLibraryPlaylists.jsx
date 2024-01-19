import axios from "axios";

import "../styles/nav-library-playlists.css"
import { useEffect, useState } from "react";

function NavLibraryPlaylists({ token }) {

    const [likeSongsLibrary, setLikedSongsLibrary] = useState({})

    useEffect(() => {
        const getLikedSongsLibrary = async () => {
            const { data } = await axios.get(
              `https://api.spotify.com/v1/me/tracks`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
              setLikedSongsLibrary({
                numTracks: data.total
              })
        };
        getLikedSongsLibrary()
    }, [token])

    return (
        <div className='navigation--playlists-container'>
            <div className='navigation--playlists-scrollbar'>
                <ul className="navigation--playlists-list">
                    <li className="navigation--playlists-liked-container">
                        <img src="" alt="" />
                        <div>Liked Songs</div>
                        <div>Playlist</div>
                        <span className="middot">&middot;</span>
                        <div>{`${likeSongsLibrary.numTracks} songs`}</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavLibraryPlaylists