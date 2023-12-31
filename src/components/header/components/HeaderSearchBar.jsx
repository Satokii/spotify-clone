import { useEffect, useState } from "react";
import axios from "axios";

import "../styles/header-searchbar.css"

function HeaderSearchBar({ token }) {
    const [searchQuery, setSearchQuery] = useState("")
    const [results, setResults] = useState([])

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
                type: "album,show,playlist,artist"
              },
            }
          );
        setResults(data.albums.items[0].name)
            // console.log(data)
        };

    console.log(results)

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