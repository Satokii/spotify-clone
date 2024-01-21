import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import scrollToTop from "../../../shared-functions/scrollToTop";
import LikedSongsImg from "../../../assets/images/liked-songs-img.png"

import "../styles/nav-library-playlists.css"

function NavLibraryPlaylists({ token }) {

    const [likeSongsLibrary, setLikedSongsLibrary] = useState({})
    const [playlistItemsLibrary, setPlaylistItemsLibrary] = useState([])

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

    useEffect(() => {
      const getPlaylistItems = async () => {
          const { data } = await axios.get(
            `https://api.spotify.com/v1/me/playlists`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
              params: {
                limit: 50
              }
            }
          );
            setPlaylistItemsLibrary(data.items)
      };
      getPlaylistItems()
  }, [token])

    return (
        <div className='navigation--playlists-scrollbar'>
            <div className='navigation--playlists-container'>
                <ul className="navigation--playlists-list grid">
                    <li tabIndex={1}>
                      <Link className="navigation--playlists-item-container grid" to={"/liked-songs"} onClick={scrollToTop}>
                          <img className="navigation--playlists-item-img" src={LikedSongsImg} alt="liked songs img" />
                          <div className="navigation--playlists-item-text-container grid">
                              <div className="navigation--playlists-item-header">Liked Songs</div>
                              <div className="navigation--playlists-item-details ">Playlist &bull; {`${likeSongsLibrary.numTracks}`} songs</div>
                          </div>
                        </Link>
                    </li>
                    {playlistItemsLibrary.map((playlist, index) =>
                      <li key={`${playlist.id}-${index}`} className="navigation--playlists-item-container grid" tabIndex={1}>
                        {playlist.images.length ? 
                        <img className="navigation--playlists-item-img" src={playlist.images[0].url} alt="playlist songs img" />
                        : <div></div> }
                        <div className="navigation--playlists-item-text-container grid">
                            <div className="navigation--playlists-item-header">{playlist.name}</div>
                            <div className="navigation--playlists-item-details "><span className="navigation--playlists-item-capitalise">{playlist.type}</span> &bull; {`${playlist.owner.display_name}`}</div>
                        </div>
                  </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default NavLibraryPlaylists