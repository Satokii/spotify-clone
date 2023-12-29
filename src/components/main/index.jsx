import { useState, useRef, useEffect } from "react";
import TopTracksPreview from "./components/TopTracksPreview";
import TopTracksPview6Mths from "./components/TopTracksPview6Mths";
import TopTracksPview4Wks from "./components/TopTracksPview4Wks";
import TopArtistsPreview from "./components/TopArtistsPreview";
import TopArtistsPview6mths from "./components/TopArtistsPview6Mths";
import TopArtistsPview4Wks from "./components/TopArtistsPview4Wks";
import RecentlyPlayed from "./components/RecentlyPlayed";
import "./styles/main.css";

function Main({ token }) {
  const TRACKS_INITIAL_STATE = "long";

  const [topTracks, setTopTracks] = useState(TRACKS_INITIAL_STATE);
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  const [playCount, setPlayCount] = useState([]);

  const toggleTopTracks = () => {
    if (topTracks === "long") return <TopTracksPreview token={token} />;
    else if (topTracks === "medium") return <TopTracksPview6Mths token={token} />;
    else if (topTracks === "short") return <TopTracksPview4Wks token={token} />;
  };

  const [showTopTracksDropdown, setShowTopTracksDropdown] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  function toggleDropdown() {
    setShowTopTracksDropdown(!showTopTracksDropdown);
  }

  function handleOutsideClick(e) {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target) &&
      e.target !== buttonRef.current
    ) {
      setShowTopTracksDropdown(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <main className="main grid">
      <section>
        <h2>Top Tracks Preview</h2>
        <button
          className="top-tracks-filter-btn grid"
          ref={buttonRef}
          onClick={() => toggleDropdown()}
        >
          Filter Date Range
        </button>
        {showTopTracksDropdown && (
          <ul className="exercises-dropdown-filter-list" ref={menuRef}>
            <li
              onClick={() => {
                setShowTopTracksDropdown(false);
                setTopTracks("long");
              }}
            >
              All Time
            </li>
            <li
              onClick={() => {
                setShowTopTracksDropdown(false);
                setTopTracks("medium");
              }}
            >
              Last 6 Months
            </li>
            <li
              onClick={() => {
                setShowTopTracksDropdown(false);
                setTopTracks("short");
              }}
            >
              Last 4 Weeks
            </li>
          </ul>
        )}
        {toggleTopTracks()}
      </section>
      <section>
        <TopArtistsPreview token={token} />
        <TopArtistsPview6mths token={token} />
        <TopArtistsPview4Wks token={token} />
      </section>
      <RecentlyPlayed token={token} />
    </main>
  );
}

export default Main;
