import SearchResultsTracks from "./components/SearchResultsTracks"
import SearchResultsArtists from "./components/SearchResultsArtists"

import "./styles/search-results-page.css"

function SearchResultsPage({ trackResults, trackTotal, artistResults, artistTotal,  albumResults, albumTotal, playlistResults, playlistTotal }) {
    
    return (
        <section className="search-results--container grid">
            <h2 className="search-results--header">Search Results</h2>
            <article className="search-results--content grid">
                <SearchResultsTracks trackResults={trackResults} trackTotal={trackTotal} />
                {/* <div className="search-results--category-container grid">
                    <h3 className="search-results--category-subheader ">Artists</h3>
                    <p className="search-results--category-num-results">{`(Total results: ${artistTotal})`}</p>
                    <ul className="search-results--category-list grid">
                        {artistResults.map((artist, index) =>
                            <li className="search-results--category-item grid" key={`${artist.id}-${index}`}>
                                <p>{artist.name}</p>
                                <p>{`Popularity rating: ${artist.popularity}`}</p>
                                <img src={artist.images[0].url} alt={`${artist.name} image`} />
                                <p>{`Spotify followers: ${artist.followers.total}`}</p>
                            </li>
                        )}
                    </ul>
                </div> */}
                < SearchResultsArtists artistResults={artistResults} artistTotal={artistTotal} />
                <div className="search-results--category-container grid">
                    <h3 className="search-results--category-subheader ">Albums</h3>
                    <p className="search-results--category-num-results">{`(Total results: ${albumTotal})`}</p>
                    <ul className="search-results--category-list grid">
                        {albumResults.map((album, index) =>
                            <li className="search-results--category-item grid" key={`${album.id}-${index}`}>
                                <p>{album.name}</p>
                                <p>{album.artists[0].name}</p>
                                <img src={album.images[0].url} alt={`${album.name} image`} />
                                <p>{`Released: ${album.release_date}`}</p>
                            </li>
                        )}
                    </ul>
                </div>
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