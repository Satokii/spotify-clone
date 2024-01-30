import fixLengthSearch from "../../../shared-functions/fixedLengthSearch";
import formatDate from "../../../shared-functions/formatDate";

import "../styles/search-results-tracks.css"

function SearchResultsTracks({ trackTotal, trackResults }) {

  return (
    <div className="search-results-tracks--container grid">
      <h3 className="search-results-tracks--header">Songs</h3>
      <ul className="search-results-tracks--list grid">
        {trackResults.map((track, index) => (
          <li
            className="search-results-tracks--item grid"
            key={`${track.id}-${index}`}
          >
            {track.album.images.length ? <img src={track.album.images[0].url} alt={`${track.name} image`} /> : <div>No Image</div>}
            <div className="search-results-tracks--item-text">
              <p className="search-results--category-text-bold">{fixLengthSearch(track.name)}</p>
              <p className="search-results--category-text">{fixLengthSearch(track.artists[0].name)}</p>
            </div>
            <div>time</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResultsTracks