import { useEffect, useState } from "react";
import axios from "axios";

import "../styles/header-searchbar.css"
import { useNavigate } from "react-router-dom";

function HeaderSearchBar({ token, setTrackResults, setTrackTotal, setArtistResults, setArtistTotal, setAlbumResults, setAlbumTotal }) {

    const navigate = useNavigate()

    const [searchQuery, setSearchQuery] = useState("")
    const [playlistResults, setPlaylistResults] = useState([])

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
            console.log(data.albums.items)
            setTrackTotal(data.tracks.total)
            setTrackResults(data.tracks.items)
            setArtistTotal(data.artists.total)
            setArtistResults(data.artists.items)
            setAlbumTotal(data.albums.total)
            setAlbumResults(data.albums.items)
            navigate("/search-results")
        };

    return (
        <section className="header--searchbar-container">
            <form onSubmit={e => getSearchResult(e)}>
                <input 
                    type="text"
                    placeholder="Search"
                    onChange={e => setSearchQuery(e.target.value)}
                />
                <button type="submit">Go</button>
            </form>
        </section>
    )
}

export default HeaderSearchBar