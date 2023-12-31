function SearchResultsAlbums({ albumResults, albumTotal }) {
  return (
    <div className="search-results--category-container grid">
      <h3 className="search-results--category-subheader ">Albums</h3>
      <p className="search-results--category-num-results">{`(Total results: ${albumTotal})`}</p>
      <ul className="search-results--category-list grid">
        {albumResults.map((album, index) => (
          <li
            className="search-results--category-item grid"
            key={`${album.id}-${index}`}
          >
            <p>{album.name}</p>
            <p>{album.artists[0].name}</p>
            <img src={album.images[0].url} alt={`${album.name} image`} />
            <p>{`Released: ${album.release_date}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResultsAlbums;
