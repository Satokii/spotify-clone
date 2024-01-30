import fixLengthSearch from "../../../shared-functions/fixedLengthSearch";

function SearchResultsArtists({ artistResults }) {
  return (
    <div className="search-results-artists--container grid">
      <h3 className="search-results-artists-header">Artists</h3>
      <ul className="search-results--category-list grid">
        {artistResults.map((artist, index) => (
          <li
            className="search-results--category-item grid"
            key={`${artist.id}-${index}`}
          >
            <p className="search-results--category-text-bold">{fixLengthSearch(artist.name)}</p>
            <p className="search-results--category-text">{`Popularity rating: ${artist.popularity}`}</p>
            {artist.images.length ? <img src={artist.images[0].url} alt={`${artist.name} image`} /> : <div>No Image</div>}
            <p className="search-results--category-text-other">{`Spotify followers: ${(artist.followers.total).toLocaleString()}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResultsArtists