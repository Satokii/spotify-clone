import fixLengthSearch from "../../../shared-functions/fixedLengthSearch";
import formatDate from "../../../shared-functions/formatDate";

function SearchResultsTracks({ trackTotal, trackResults }) {

  return (
    <div className="search-results--category-container grid">
      <h3 className="search-results--category-subheader ">Songs</h3>
      <p className="search-results--category-num-results">{`(Total results: ${trackTotal})`}</p>
      <ul className="search-results--category-list grid">
        {trackResults.map((track, index) => (
          <li
            className="search-results--category-item grid"
            key={`${track.id}-${index}`}
          >
            <p className="search-results--category-text-bold">{fixLengthSearch(track.name)}</p>
            <p className="search-results--category-text">{fixLengthSearch(track.artists[0].name)}</p>
            {track.album.images.length ? <img src={track.album.images[0].url} alt={`${track.name} image`} /> : <div>No Image</div>}
            <p className="search-results--category-text-other">{`Released: ${formatDate(track.album.release_date)}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResultsTracks