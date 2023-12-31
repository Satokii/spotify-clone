import { useEffect, useState } from "react";
import axios from "axios";

import "../styles/header-searchbar.css"

function HeaderSearchBar({ token }) {
    const [searchQuery, setSearchQuery] = useState("")
    const [results, setResults] = useState([])

        const getSearchResult = async () => {
          const { data } = await axios.get(
            "https://api.spotify.com/v1/search",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
              params: {
                q: searchQuery,
                // q: "remaster%20track:Doxy%20artist:Miles%20Davis",
                // type: "album artist playlist track"
                type: "artist"
              },
            }
          );
        //   setTopArtistsPview(data.items);
            console.log(data)
        };
        getSearchResult();

    console.log(searchQuery)

    return (
        <section className="header--searchbar-container">
            <form onSubmit={getSearchResult}>
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