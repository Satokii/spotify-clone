import SearchResultsTracks from "./components/SearchResultsTracks"
import SearchResultsArtists from "./components/SearchResultsArtists"
import SearchResultsAlbums from "./components/SearchResultsAlbums"
import SearchResultsPlaylists from "./components/SearchResultsPlaylists"

import "./styles/search-results-page.css"

function SearchResultsPage({ trackResults, trackTotal, artistResults, artistTotal,  albumResults, albumTotal, playlistResults, playlistTotal }) {
    
    return (
        <section className="search-results--container grid">
            <h2 className="search-results--header">Search Results</h2>
            <article className="search-results--content grid">
                <SearchResultsTracks trackResults={trackResults} trackTotal={trackTotal} />
                < SearchResultsArtists artistResults={artistResults} artistTotal={artistTotal} />
                <SearchResultsAlbums albumResults={albumResults} albumTotal={albumTotal} />
                <SearchResultsPlaylists playlistResults={playlistResults} playlistTotal={playlistTotal} />
            </article>
        </section>
    )
}

export default SearchResultsPage