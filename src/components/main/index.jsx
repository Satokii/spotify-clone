import { useState } from "react";
import { Link } from "react-router-dom";
import TopTracksPreview from "./components/TopTracksPreview";
import TopTracksPview6Mths from "./components/TopTracksPview6Mths";
import TopTracksPview4Wks from "./components/TopTracksPview4Wks";
import TopArtistsPreview from "./components/TopArtistsPreview";
import TopArtistsPview6mths from "./components/TopArtistsPview6Mths";
import TopArtistsPview4Wks from "./components/TopArtistsPview4Wks";
import RecentlyPlayed from "./components/RecentlyPlayed";
import ARTISTS_INITIAL_STATE from "../../initial-states/ARTISTS-INITIAL-STATE";
import toggleTopTracksDate from "../../shared-functions/toggleTopTracksDate";

import "./styles/main.css";
import "./styles/main-date-filter.css";
import "./styles/main-preview-styles.css";
import "./styles/main-recently-played.css";

function Main({ token, topTracksDate, setTopTracksDate, showTopTracks, setShowTopTracks,topArtistsDate, setTopArtistsDate, showTopArtists, setShowTopArtists }) {

  // HANDLE TOP TRACKS DATE RANGE
  const toggleTopTracks = () => {
    if (showTopTracks === "long") return <TopTracksPreview token={token} />;
    else if (showTopTracks === "medium")
      return <TopTracksPview6Mths token={token} />;
    else if (showTopTracks === "short")
      return <TopTracksPview4Wks token={token} />;
  };

  // HANDLE TOP ARTISTS DATE RANGE

  const toggleTopArtistsDate = (selectedDate) => {
    const updatedTopArtists = topArtistsDate.map((date) => {
      if (date.name === selectedDate.target.innerText) {
        return { ...date, className: "active-date-filter" };
      } else {
        return { ...date, className: "inactive-date-filter" };
      }
    });
    setTopArtistsDate(updatedTopArtists);
  };

  const toggleTopArtists = () => {
    if (showTopArtists === "long") return <TopArtistsPreview token={token} />;
    else if (showTopArtists === "medium")
      return <TopArtistsPview6mths token={token} />;
    else if (showTopArtists === "short")
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
            View All
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
        {toggleTopTracks()}
      </section>
      <section className="top-artists--container grid">
        <div className="top-artists--header-container grid">
          <h2 className="top-artists--header">Top Artists Preview</h2>
          <Link
            className="top-artists--see-all-link"
            to="/top-artists"
          >
            View All
          </Link>
        </div>
        <ul className="date-filter-list grid">
          {topArtistsDate.map((dateFilter, index) => (
            <li
              key={`${dateFilter.title}-${index}`}
              className={dateFilter.className}
              onClick={(e) => {
                toggleTopArtistsDate(e);
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
