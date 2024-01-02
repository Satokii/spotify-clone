import fixLengthSearch from "../../../shared-functions/fixedLengthSearch";
import formatDate from "../../../shared-functions/formatDate";

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
            <p className="search-results--category-text-bold">{fixLengthSearch(album.name)}</p>
            <p className="search-results--category-text">{fixLengthSearch(album.artists[0].name)}</p>
            {album.images.length ? <img src={album.images[0].url} alt={`${album.name} image`} /> : <div>No Image</div>}
            <p className="search-results--category-text-other">{`Released: ${formatDate(album.release_date)}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResultsAlbums;
