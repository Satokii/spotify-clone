import { useState } from "react";
import SearchPageTopNav from "./components/SearchPageTopNav"
import SearchPageBrowse from "./components/SearchPageBrowse"
import SearchResultsPage from "../search-results-page";

import './styles/search-page.css'

function SearchPage({ token, setToken }) {

    const [trackResults, setTrackResults] = useState([]);
    const [artistResults, setArtistResults] = useState([]);
    const [albumResults, setAlbumResults] = useState([]);
    const [playlistResults, setPlaylistResults] = useState([]);

    return (
        <div className="search-page--outer-container grid">
            <div className="scrollbar-search-page">
                <section className="search-page-container grid">
                    <SearchPageTopNav token={token} setToken={setToken} setTrackResults={setTrackResults} setArtistResults={setArtistResults} setAlbumResults={setAlbumResults} />
                    {trackResults.length > 0 ? 
                    <SearchResultsPage
                        trackResults={trackResults}
                        artistResults={artistResults}
                        albumResults={albumResults}
                        playlistResults={playlistResults}
                    />
                    : <SearchPageBrowse />
                    }
                </section>
            </div>
        </div>
    )
}

export default SearchPage