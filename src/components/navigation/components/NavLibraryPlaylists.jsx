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
      let playlistURL = `https://api.spotify.com/v1/me/playlists`
      let allPlaylists = []
      let combinedPlaylists = []
      const getPlaylistItems = async () => {
          const { data } = await axios.get(playlistURL,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
              params: {
                limit: 50
              }
            }
          );
          allPlaylists.push(data.items)
          if (data.next !== null) {
              playlistURL = data.next
              getPlaylistItems()
          }
          else {
              allPlaylists.forEach(array => {
                  combinedPlaylists = combinedPlaylists.concat(array)
              })
          }
          setPlaylistItemsLibrary(combinedPlaylists)
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
                      <li key={`${playlist.id}-${index}`} tabIndex={1}>
                        <Link className="navigation--playlists-item-container grid" to={`/user-playlist/${playlist.id}`} onClick={scrollToTop}>
                          {playlist.images.length ? 
                          <img className="navigation--playlists-item-img" src={playlist.images[0].url} alt="playlist songs img" />
                          : <div></div> }
                          <div className="navigation--playlists-item-text-container grid">
                              <div className="navigation--playlists-item-header">{playlist.name}</div>
                              <div className="navigation--playlists-item-details "><span className="navigation--playlists-item-capitalise">{playlist.type}</span> &bull; {`${playlist.owner.display_name}`}</div>
                          </div>
                        </Link>
                      </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default NavLibraryPlaylists