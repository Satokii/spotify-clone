import SearchResultsTracks from "./components/SearchResultsTracks"
import SearchResultsArtists from "./components/SearchResultsArtists"
import SearchResultsAlbums from "./components/SearchResultsAlbums"
import SearchResultsPlaylists from "./components/SearchResultsPlaylists"

import "./styles/search-results-page.css"

function SearchResultsPage({ trackResults, artistResults, albumResults, albumTotal, playlistResults, playlistTotal }) {
    
    return (
        <section className="search-results--container grid">
            <SearchResultsTracks trackResults={trackResults} />
            <SearchResultsArtists artistResults={artistResults} />
            <SearchResultsAlbums albumResults={albumResults} albumTotal={albumTotal} />
            <SearchResultsPlaylists playlistResults={playlistResults} playlistTotal={playlistTotal} />
        </section>
    )
}

export default SearchResultsPage