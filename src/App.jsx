import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import WelcomePage from "./components/welcome-page";
import Navigation from "./components/navigation";
import Main from "./components/main";
import Footer from "./components/footer";
import Logout from "./Logout";
import TopTracksPage from "./components/full-top-results/top-tracks-page";
import TopArtistsPage from "./components/full-top-results/top-artists-page";
import SearchResultsPage from "./components/search-results-page";
import axios from "axios";
import TRACKS_INITIAL_STATE from "./initial-states/TRACKS-INITIAL-STATE";
import ARTISTS_INITIAL_STATE from "./initial-states/ARTISTS-INITIAL-STATE";

import './app.css'
import './shared-styles/root.css'
import './shared-styles/scrollbars.css'
import './shared-styles/buttons.css'

function App() {
  const [token, setToken] = useState("");

  // function to check if api authorisation is still valid
  // when test api GET request fails, auto logs out user - checks every 2 mins
  useEffect(() => {
    setInterval(() => {
      const checkStatus = async () => {
        const { status } = await axios.get(
          "https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if(status !== 200) {
          Logout(setToken)
        }
      }
      checkStatus()
    }, 120000);
  }, [token])

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setToken(token);
  }, []);

// FETCH CURRENTLY PLAYING TRACK
const [currentTrack, setCurrentTrack] = useState([])
const [isPlaying, setIsPlaying] = useState(false)
const [trackDuration, setTrackDuration] = useState(null)
const [currentProgress, setCurrentProgress] = useState(null)

  useEffect(() => {
    let track = []
    const getCurrentTrack = async () => {
      const { data } = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );
      track.push(data.item)
      setCurrentTrack(track)
      setIsPlaying(data.is_playing)
      setTrackDuration(data.item.duration_ms)
      setCurrentProgress(data.progress_ms)
    };
    getCurrentTrack();
  }, [setIsPlaying, token]);

  // TOP TRACKS STATES
  const [topTracksDate, setTopTracksDate] = useState(TRACKS_INITIAL_STATE);
  const [showTopTracks, setShowTopTracks] = useState("long_term");

  // TOP ARTISTS STATES
  const [topArtistsDate, setTopArtistsDate] = useState(ARTISTS_INITIAL_STATE);
  const [showTopArtists, setShowTopArtists] = useState("long_term");

  // HEADER SEARCH STATES
  const [trackResults, setTrackResults] = useState([])
  const [trackTotal, setTrackTotal] = useState(0)
  const [artistResults, setArtistResults] = useState([])
  const [artistTotal, setArtistTotal] = useState(0)
  const [albumResults, setAlbumResults] = useState([])
  const [albumTotal, setAlbumTotal] = useState(0)
  const [playlistResults, setPlaylistResults] = useState([])
  const [playlistTotal, setPlaylistTotal] = useState(0)

  return (
    <>
      <div className="container grid">
        <Header token={token} setToken={setToken} trackResults={trackResults} setTrackResults={setTrackResults} setTrackTotal={setTrackTotal} setArtistResults={setArtistResults} setArtistTotal={setArtistTotal} setAlbumResults={setAlbumResults} setAlbumTotal={setAlbumTotal} setPlaylistResults={setPlaylistResults} setPlaylistTotal={setPlaylistTotal} />
        <Navigation token={token} />
        <Routes>
          <Route
            path="/"
            element={token ? <Main token={token} currentTrack={currentTrack} trackDuration={trackDuration} currentProgress={currentProgress} isPlaying={isPlaying} setIsPlaying={setIsPlaying} topTracksDate={topTracksDate} setTopTracksDate={setTopTracksDate} showTopTracks={showTopTracks} setShowTopTracks={setShowTopTracks} topArtistsDate={topArtistsDate} setTopArtistsDate={setTopArtistsDate} showTopArtists={showTopArtists} setShowTopArtists={setShowTopArtists} /> : <WelcomePage />}
          >
          </Route>
          <Route
            path="/top-tracks"
            element={<TopTracksPage token={token} topTracksDate={topTracksDate} setTopTracksDate={setTopTracksDate} showTopTracks={showTopTracks} setShowTopTracks={setShowTopTracks} />}
          >
          </Route>
          <Route
            path="/top-artists"
            element={<TopArtistsPage token={token} topArtistsDate={topArtistsDate} setTopArtistsDate={setTopArtistsDate} showTopArtists={showTopArtists} setShowTopArtists={setShowTopArtists} />}
          >
          </Route>
          <Route
            path="/search-results"
            element={<SearchResultsPage trackResults={trackResults} trackTotal={trackTotal} artistResults={artistResults} artistTotal={artistTotal} albumResults={albumResults} albumTotal={albumTotal} playlistResults={playlistResults} playlistTotal={playlistTotal} />}
          >
          </Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
