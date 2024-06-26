import { Link } from "react-router-dom";
// import MainPlayback from "./components/main-playback/MainPlayback";
import TopTracksPreview from "./components/TopTracksPreview";
import TopArtistsPreview from "./components/TopArtistsPreview";
import RecentlyPlayed from "./components/RecentlyPlayed";
import toggleTopTracksDate from "../../shared-functions/toggleTopTracksDate";
import toggleTopArtistsDate from "../../shared-functions/toggleTopArtistsDate";

import "./styles/main.css";
import "./styles/main-date-filter.css";
import "./styles/main-preview-styles.css";
import "./styles/main-recently-played.css";

function Main({ token, queue, setQueue, currentTrack, notPlaying, topTracksDate, setTopTracksDate, showTopTracks, setShowTopTracks,topArtistsDate, setTopArtistsDate, showTopArtists, setShowTopArtists }) {


  return (
    <div className="scrollbar-main">
    <main className="main grid">
      <h2 className="main--header">My Dashboard</h2>
      {/* <MainPlayback token={token} queue={queue} setQueue={setQueue} currentTrack={currentTrack} notPlaying={notPlaying} /> */}
      <section className="top-tracks--container grid">
        <div className="top-tracks--header-container grid">
          <h3 className="top-tracks--header">Top Tracks Preview</h3>
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
          <h3 className="top-artists--header">Top Artists Preview</h3>
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
        <TopArtistsPreview token={token} showTopArtists={showTopArtists} />
      </section>
      <RecentlyPlayed token={token} />
    </main>
    </div>
  );
}

export default Main;
