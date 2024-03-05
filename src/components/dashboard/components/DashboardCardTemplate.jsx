import { Link } from "react-router-dom";
import scrollToTop from "../../../shared-functions/scrollToTop";
import PlayGreen from "../../../assets/svgs/main-app/main-play-btn.svg"
import fixLenthPlistDesc from "../../../shared-functions/fixLengthPlistDesc";

function DashboardCardTemplate({ itemArr }) {
  return (
    <div className="dashboard--top-featured-playlists-list grid">
      {itemArr.map((playlist) => (
        <Link
          className="top-featured-playlist--item-container grid"
          key={playlist.id}
          to={`/playlist/${playlist.id}`}
          onClick={scrollToTop}
        >
          <div className="top-featured-playlist--img-container">
            {playlist.images.length ? (
              <div className="top-featured-playlist--img">
                <img src={playlist.images[0].url} alt={playlist.name} />
                <img
                  className="top-featured-playlist--play"
                  src={PlayGreen}
                  alt="play button"
                />
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="top-featured-playlist--name">{playlist.name}</div>
          <div className="top-featured-playlist--description">
            {fixLenthPlistDesc(playlist.description)}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default DashboardCardTemplate;
