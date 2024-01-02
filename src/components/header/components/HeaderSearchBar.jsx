import { useState } from "react";
import axios from "axios";

import "../styles/header-searchbar.css"
import { useNavigate } from "react-router-dom";

function HeaderSearchBar({ token, setTrackResults, setTrackTotal, setArtistResults, setArtistTotal, setAlbumResults, setAlbumTotal, setPlaylistResults, setPlaylistTotal }) {

    const navigate = useNavigate()

    const [searchQuery, setSearchQuery] = useState("")

        const getSearchResult = async (e) => {
            e.preventDefault()
          const { data } = await axios.get(
            "https://api.spotify.com/v1/search",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
              params: {
                q: searchQuery,
                type: "track,artist,album,playlist",
                limit: 10
              },
            }
          );
            setTrackTotal(data.tracks.total)
            setTrackResults(data.tracks.items)
            setArtistTotal(data.artists.total)
            setArtistResults(data.artists.items)
            setAlbumTotal(data.albums.total)
            setAlbumResults(data.albums.items)
            setPlaylistTotal(data.playlists.total)
            setPlaylistResults(data.playlists.items)
            navigate("/search-results")
        };

    return (
        <section className="header--searchbar-container grid">
            <form className="header--searchbar-form grid" onSubmit={e => getSearchResult(e)}>
                <input 
                    type="text"
                    placeholder="Search: Song, Artist, etc."
                    onChange={e => setSearchQuery(e.target.value)}
                />
                <button className="search" type="reset"></button>
            </form>
        </section>
    )
}

export default HeaderSearchBar