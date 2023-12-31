import { useEffect, useState } from "react";
import axios from "axios";

import "../styles/header-searchbar.css"
import { useNavigate } from "react-router-dom";

function HeaderSearchBar({ token, setTrackResults }) {

    const navigate = useNavigate()

    const [searchQuery, setSearchQuery] = useState("")
    // const [trackResults, setTrackResults] = useState([])
    const [artistResults, setArtistResults] = useState([])
    const [albumResults, setAlbumResults] = useState([])
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
        // setTrackResults(data.albums.items[0].name)
            console.log(data.tracks.total)
            setTrackResults(data.tracks.items)
            navigate("/search-results")
        };

    // console.log(trackResults)

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