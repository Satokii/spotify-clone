import axios from "axios";
import { useState } from "react";

import '../styles/searchbar.css'

function SearchBar({ token }) {

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
    };

    return (
        <section className="searchbar grid">
            {/* <div className="searchbar--container"> */}
                <form className="searchbar--form grid" onSubmit={e => getSearchResult(e)}>
                    <input 
                        type="text"
                        placeholder="Search: Song, Artist, etc."
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                    <button className="search" type="reset"></button>
                </form>
            {/* </div> */}
        </section>
    )
}

export default SearchBar