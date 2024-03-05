import { Link } from "react-router-dom";
import scrollToTop from "../../../shared-functions/scrollToTop";
import PlayGreen from "../../../assets/svgs/main-app/main-play-btn.svg"
import fixLenthPlistDesc from "../../../shared-functions/fixLengthPlistDesc";

function DashboardCardTemplate({ itemArr }) {
  return (
    <div className="dashboard-playlist-list grid">
      {itemArr.map((playlist) => (
        <Link
          className="dashboard-playlist-list--item-container grid"
          key={playlist.id}
          to={`/playlist/${playlist.id}`}
          onClick={scrollToTop}
        >
          <div className="dashboard-playlist-list--img-container">
            {playlist.images.length ? (
              <div className="dashboard-playlist-list--img">
                <img src={playlist.images[0].url} alt={playlist.name} />
                <img
                  className="dashboard-playlist-list--play"
                  src={PlayGreen}
                  alt="play button"
                />
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="dashboard-playlist-list--name">{playlist.name}</div>
          <div className="dashboard-playlist-list--description">
            {fixLenthPlistDesc(playlist.description)}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default DashboardCardTemplate;
