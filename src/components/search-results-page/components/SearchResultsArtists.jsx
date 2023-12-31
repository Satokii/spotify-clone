function SearchResultsArtists({ artistTotal, artistResults }) {
  return (
    <div className="search-results--category-container grid">
      <h3 className="search-results--category-subheader ">Artists</h3>
      <p className="search-results--category-num-results">{`(Total results: ${artistTotal})`}</p>
      <ul className="search-results--category-list grid">
        {artistResults.map((artist, index) => (
          <li
            className="search-results--category-item grid"
            key={`${artist.id}-${index}`}
          >
            <p>{artist.name}</p>
            <p>{`Popularity rating: ${artist.popularity}`}</p>
            <img src={artist.images[0].url} alt={`${artist.name} image`} />
            <p>{`Spotify followers: ${artist.followers.total}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResultsArtists