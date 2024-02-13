import fixLengthSearch from "../../../shared-functions/fixedLengthSearch";
import PlayGreen from "../../../assets/svgs/main-app/main-play-btn.svg"


import "../styles/search-results-artists.css"

function SearchResultsArtists({ artistResults }) {
  return (
    <div className="search-results-artists--container grid">
      <h3 className="search-results-artists-header">Artists</h3>
      <ul className="search-results-artists--list grid">
        {artistResults.map((artist, index) => (
          <li
            className="search-results-artists--single-artist grid"
            key={`${artist.id}-${index}`}
          >
            <div className="search-results-artists--img-outer-container">
                {artist.images.length ? 
                  <div className="search-results-artists--img-container">
                      <img className="search-results--artists-img" src={artist.images[0].url} alt="artist image" />
                        <img className="search-results-artists--play" src={PlayGreen} alt="play button" />
                      </div>
                : <div className="search-results--artists-img"></div>
                }
            </div>
            <p className="search-results--artists-name">{fixLengthSearch(artist.name)}</p>
            <p className="search-results--artists-type">Artist</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResultsArtists