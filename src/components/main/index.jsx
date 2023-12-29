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
  const ARTISTS_INITIAL_STATE = "long";

  const [topTracks, setTopTracks] = useState(TRACKS_INITIAL_STATE);
  const [topArtists, setTopArtists] = useState(ARTISTS_INITIAL_STATE);

  // TOGGLE TRACKS DROPDOWN
  const toggleTopTracks = () => {
    if (topTracks === "long") return <TopTracksPreview token={token} />;
    else if (topTracks === "medium")
      return <TopTracksPview6Mths token={token} />;
    else if (topTracks === "short") return <TopTracksPview4Wks token={token} />;
  };

  const [showTopTracksDropdown, setShowTopTracksDropdown] = useState(false);
  const tracksMenuRef = useRef(null);
  const tracksButtonRef = useRef(null);

  const toggleTopTracksDropdown = () => {
    setShowTopTracksDropdown(!showTopTracksDropdown);
  };

  const handleOutsideClickTracksDropdown = (e) => {
    if (
      tracksMenuRef.current &&
      !tracksMenuRef.current.contains(e.target) &&
      e.target !== tracksButtonRef.current
    ) {
      setShowTopTracksDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClickTracksDropdown);
    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClickTracksDropdown
      );
    };
  }, []);

  // TOGGLE ARTISTS DROPDOWN
  const toggleTopArtists = () => {
    if (topArtists === "long") return <TopArtistsPreview token={token} />;
    else if (topArtists === "medium")
      return <TopArtistsPview6mths token={token} />;
    else if (topArtists === "short")
      return <TopArtistsPview4Wks token={token} />;
  };

  const [showTopArtistsDropdown, setShowTopArtistsDropdown] = useState(false);
  const artistsMenuRef = useRef(null);
  const artistsButtonRef = useRef(null);

  const toggleTopArtistsDropdown = () => {
    setShowTopArtistsDropdown(!showTopArtistsDropdown);
  };

  const handleOutsideClickArtistsDropdown = (e) => {
    if (
      artistsMenuRef.current &&
      !artistsMenuRef.current.contains(e.target) &&
      e.target !== artistsButtonRef.current
    ) {
      setShowTopArtistsDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClickArtistsDropdown);
    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClickArtistsDropdown
      );
    };
  }, []);

  return (
    <main className="main grid">
      <section className="top-tracks--container grid">
        <h2 className="top-tracks--header">Top Tracks Preview</h2>
        <button
          className="date-filter-btn btn grid"
          ref={tracksButtonRef}
          onClick={() => toggleTopTracksDropdown()}
        >
          Filter Date Range
        </button>
        {showTopTracksDropdown && (
          <ul className="date-filter-list" ref={tracksMenuRef}>
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
      <section className="top-artists--container grid">
        <h2 className="top-artists--header">Top Artists Preview</h2>
        <button
          className="date-filter-btn btn grid"
          ref={artistsButtonRef}
          onClick={() => toggleTopArtistsDropdown()}
        >
          Filter Date Range
        </button>
        {showTopArtistsDropdown && (
          <ul className="date-filter-list" ref={artistsMenuRef}>
            <li
              onClick={() => {
                setShowTopArtistsDropdown(false);
                setTopArtists("long");
              }}
            >
              All Time
            </li>
            <li
              onClick={() => {
                setShowTopArtistsDropdown(false);
                setTopArtists("medium");
              }}
            >
              Last 6 Months
            </li>
            <li
              onClick={() => {
                setShowTopArtistsDropdown(false);
                setTopArtists("short");
              }}
            >
              Last 4 Weeks
            </li>
          </ul>
        )}
        {toggleTopArtists()}
      </section>
      <RecentlyPlayed token={token} />
    </main>
  );
}

export default Main;
