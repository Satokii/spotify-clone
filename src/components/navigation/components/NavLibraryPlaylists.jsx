import axios from "axios";
import { useEffect, useState } from "react";
import LikedSongsImg from "../../../assets/images/liked-songs-img.png"

import "../styles/nav-library-playlists.css"

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
        <div className='navigation--playlists-scrollbar'>
            <div className='navigation--playlists-container'>
                <ul className="navigation--playlists-list grid">
                    <li className="navigation--playlists-liked-container grid" tabIndex={1}>
                        <img className="navigation--playlists-liked-img" src={LikedSongsImg} alt="liked songs img" />
                        <div className="navigation--playlists-liked-text-container grid">
                            <div className="navigation--playlists-liked-header">Liked Songs</div>
                            <div className="navigation--playlists-liked-details ">Playlist &bull; {`${likeSongsLibrary.numTracks}`} songs</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavLibraryPlaylists