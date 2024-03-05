import { Link } from "react-router-dom";
import fixLengthSearch from "../../../shared-functions/fixedLengthSearch";
import PlayGreen from "../../../assets/svgs/main-app/main-play-btn.svg"
import scrollToTop from "../../../shared-functions/scrollToTop";

function SearchResultsPlaylists({ playlistResults }) {
  return (
    <div className="search-results-card--container grid">
      <h3 className="search-results-card-header">Playlists</h3>
      <ul className="search-results-card--list grid">
        {playlistResults.map((playlist, index) => (
          <Link
            className="search-results-card--single grid"
            key={`${playlist.id}-${index}`}
            to={`/user-playlist/${playlist.id}`}
            onClick={scrollToTop}
          >
            <div className="search-results-card--img-outer-container">
                {playlist.images.length ? (
                  <div className="search-results-card--img-container">
                    <img
                      className="search-results--card-img-sq"
                      src={playlist.images[0].url}
                      alt="playlist image"
                    />
                    <img
                      className="search-results-card--play"
                      src={PlayGreen}
                      alt="play button"
                    />
                  </div>
                ) : (
                  <div className="search-results--card-img-sq"></div>
                )}
              </div>
            <p className="search-results--card-name">{fixLengthSearch(playlist.name)}</p>
            <p className="search-results--card-type">{fixLengthSearch(playlist.owner.display_name)}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default SearchResultsPlaylists;
