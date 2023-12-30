import { Link } from "react-router-dom";
import TopTracksPreview from "./components/TopTracksPreview";
import TopArtistsPreview from "./components/TopArtistsPreview";
import TopArtistsPview6mths from "./components/TopArtistsPview6Mths";
import TopArtistsPview4Wks from "./components/TopArtistsPview4Wks";
import RecentlyPlayed from "./components/RecentlyPlayed";
import toggleTopTracksDate from "../../shared-functions/toggleTopTracksDate";
import toggleTopArtistsDate from "../../shared-functions/toggleTopArtistsDate";

import "./styles/main.css";
import "./styles/main-date-filter.css";
import "./styles/main-preview-styles.css";
import "./styles/main-recently-played.css";

function Main({ token, topTracksDate, setTopTracksDate, showTopTracks, setShowTopTracks,topArtistsDate, setTopArtistsDate, showTopArtists, setShowTopArtists }) {

  // HANDLE TOP ARTISTS DATE RANGE
  const toggleTopArtists = () => {
    if (showTopArtists === "long_term") return <TopArtistsPreview token={token} />;
    else if (showTopArtists === "medium_term")
      return <TopArtistsPview6mths token={token} />;
    else if (showTopArtists === "short_term")
      return <TopArtistsPview4Wks token={token} />;
  };

  return (
    <main className="main grid">
      <section className="top-tracks--container grid">
        <div className="top-tracks--header-container grid">
          <h2 className="top-tracks--header">Top Tracks Preview</h2>
          <Link 
            className="top-tracks--see-all-link"
            to="/top-tracks"
          >
            View Top 99 Tracks
          </Link>
        </div>
        <ul className="date-filter-list grid">
          {topTracksDate.map((dateFilter, index) => (
            <li
              key={`${dateFilter.title}-${index}`}
              className={dateFilter.className}
              onClick={(e) => {
                toggleTopTracksDate(e, topTracksDate, setTopTracksDate);
                setShowTopTracks(dateFilter.click);
              }}
            >
              {dateFilter.name}
            </li>
          ))}
        </ul>
        <TopTracksPreview token={token} showTopTracks={showTopTracks} />
      </section>
      <section className="top-artists--container grid">
        <div className="top-artists--header-container grid">
          <h2 className="top-artists--header">Top Artists Preview</h2>
          <Link
            className="top-artists--see-all-link"
            to="/top-artists"
          >
            View Top 99 Artists
          </Link>
        </div>
        <ul className="date-filter-list grid">
          {topArtistsDate.map((dateFilter, index) => (
            <li
              key={`${dateFilter.title}-${index}`}
              className={dateFilter.className}
              onClick={(e) => {
                toggleTopArtistsDate(e, topArtistsDate, setTopArtistsDate);
                setShowTopArtists(dateFilter.click);
              }}
            >
              {dateFilter.name}
            </li>
          ))}
        </ul>
        {toggleTopArtists()}
      </section>
      <RecentlyPlayed token={token} />
    </main>
  );
}

export default Main;
// export { Main, useSharedTopTracksDate } ;
