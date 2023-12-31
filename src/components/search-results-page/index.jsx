import SearchResultsTracks from "./components/SearchResultsTracks"
import SearchResultsArtists from "./components/SearchResultsArtists"
import SearchResultsAlbums from "./components/SearchResultsAlbums"

import "./styles/search-results-page.css"

function SearchResultsPage({ trackResults, trackTotal, artistResults, artistTotal,  albumResults, albumTotal, playlistResults, playlistTotal }) {
    
    return (
        <section className="search-results--container grid">
            <h2 className="search-results--header">Search Results</h2>
            <article className="search-results--content grid">
                <SearchResultsTracks trackResults={trackResults} trackTotal={trackTotal} />
                < SearchResultsArtists artistResults={artistResults} artistTotal={artistTotal} />
                <SearchResultsAlbums albumResults={albumResults} albumTotal={albumTotal} />
                <div className="search-results--category-container grid">
                    <h3 className="search-results--category-subheader ">Playlists</h3>
                    <p className="search-results--category-num-results">{`(Total results: ${playlistTotal})`}</p>
                    <ul className="search-results--category-list grid">
                        {playlistResults.map((playlist, index) =>
                            <li className="search-results--category-item grid" key={`${playlist.id}-${index}`}>
                                <p>{`Playlist Name: ${playlist.name}`}</p>
                                <p>{`Owner: ${playlist.owner.display_name}`}</p>
                                <img src={playlist.images[0].url} alt={`${playlist.name} image`} />
                                <p>{`Number of Tracks: ${playlist.tracks.total}`}</p>
                            </li>
                        )}
                    </ul>
                </div>
            </article>
        </section>
    )
}

export default SearchResultsPage