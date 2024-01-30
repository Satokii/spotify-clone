import fixLengthSearch from "../../../shared-functions/fixedLengthSearch";
import PlayGreen from "../../../assets/svgs/main-app/main-play-btn.svg"


import "../styles/search-results-artists.css"

function SearchResultsArtists({ artistResults }) {
  return (
    <div className="search-results-artists--container grid">
      <h3 className="search-results-artists-header">Artists</h3>
      <ul className="artist--section-list grid">
        {artistResults.map((artist, index) => (
          <li
            className="artist--section-single-track grid"
            key={`${artist.id}-${index}`}
          >
            <div className="artist--section-img-outer-container">
                {artist.images.length ? 
                  <div className="artist--section-img-container">
                      <img className="search-results--artists-img" src={artist.images[0].url} alt="artist image" />
                        <img className="artist--section-play" src={PlayGreen} alt="play button" />
                      </div>
                : <div className="search-results--artists-img"></div>
                }
            </div>
            <p className="search-results--category-text-bold">{fixLengthSearch(artist.name)}</p>
            <p>artist</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResultsArtists