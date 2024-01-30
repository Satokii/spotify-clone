import { useState } from "react";
import SearchPageTopNav from "./components/SearchPageTopNav"
import SearchPageBrowse from "./components/SearchPageBrowse"

import './styles/search-page.css'

function SearchPage({ token, setToken }) {

    const [trackResults, setTrackResults] = useState([]);
    const [trackTotal, setTrackTotal] = useState(0);
    const [artistResults, setArtistResults] = useState([]);
    const [artistTotal, setArtistTotal] = useState(0);
    const [albumResults, setAlbumResults] = useState([]);
    const [albumTotal, setAlbumTotal] = useState(0);
    const [playlistResults, setPlaylistResults] = useState([]);
    const [playlistTotal, setPlaylistTotal] = useState(0);

    return (
        <div className="search-page--outer-container grid">
            <div className="scrollbar-search-page">
                <section className="search-page-container grid">
                    <SearchPageTopNav token={token} setToken={setToken} />
                    <SearchPageBrowse />
                </section>
            </div>
        </div>
    )
}

export default SearchPage