import fixLengthSearch from "../../../shared-functions/fixedLengthSearch";

function SearchResultsPlaylists({ playlistTotal, playlistResults }) {
  return (
    <div className="search-results--category-container grid">
      <h3 className="search-results--category-subheader ">Playlists</h3>
      <p className="search-results--category-num-results">{`(Total results: ${playlistTotal})`}</p>
      <ul className="search-results--category-list grid">
        {playlistResults.map((playlist, index) => (
          <li
            className="search-results--category-item grid"
            key={`${playlist.id}-${index}`}
          >
            <p className="search-results--category-text-bold">{fixLengthSearch(playlist.name)}</p>
            <p className="search-results--category-text">{fixLengthSearch(playlist.owner.display_name)}</p>
            {playlist.images.length ? <img src={playlist.images[0].url} alt={`${playlist.name} image`} /> : <div>No Image</div>}
            <p className="search-results--category-text-other">{`Number of Tracks: ${playlist.tracks.total}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResultsPlaylists;
