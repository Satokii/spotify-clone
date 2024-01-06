import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import WelcomePage from "./components/welcome-page";
import Navigation from "./components/navigation";
import Main from "./components/main";
import Album from "./components/album";
import Footer from "./components/footer";
import TopTracksPage from "./components/full-top-results/top-tracks-page";
import TopArtistsPage from "./components/full-top-results/top-artists-page";
import SearchResultsPage from "./components/search-results-page";
import axios from "axios";
import CURRENT_TRACK_INITIAL_STATE from "./initial-states/CURRENT_TRACK_INITIAL_STATE";
import TRACKS_INITIAL_STATE from "./initial-states/TRACKS-INITIAL-STATE";
import ARTISTS_INITIAL_STATE from "./initial-states/ARTISTS-INITIAL-STATE";

import "./app.css";
import "./shared-styles/root.css";
import "./shared-styles/scrollbars.css";
import "./shared-styles/buttons.css";
import  "./shared-styles/back-button.css"

function App() {
  const [token, setToken] = useState("");

    //  QUEUE
    const [queue, setQueue] = useState([])

    // TOP TRACKS STATES
    const [topTracksDate, setTopTracksDate] = useState(TRACKS_INITIAL_STATE);
    const [showTopTracks, setShowTopTracks] = useState("long_term");
  
    // TOP ARTISTS STATES
    const [topArtistsDate, setTopArtistsDate] = useState(ARTISTS_INITIAL_STATE);
    const [showTopArtists, setShowTopArtists] = useState("long_term");
  
    // HEADER SEARCH STATES
    const [trackResults, setTrackResults] = useState([]);
    const [trackTotal, setTrackTotal] = useState(0);
    const [artistResults, setArtistResults] = useState([]);
    const [artistTotal, setArtistTotal] = useState(0);
    const [albumResults, setAlbumResults] = useState([]);
    const [albumTotal, setAlbumTotal] = useState(0);
    const [playlistResults, setPlaylistResults] = useState([]);
    const [playlistTotal, setPlaylistTotal] = useState(0);

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
  const [currentTrack, setCurrentTrack] = useState(CURRENT_TRACK_INITIAL_STATE);
  const [notPlaying, setNotPlaying] = useState(null);

  useEffect(() => {
    const getCurrentTrack = async () => {
      const { data } = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!data) setNotPlaying(true);
      else {
        console.log(data.item)
        const { item } = data;
        setCurrentTrack({
          trackId: item.id,
          albumId: item.album.id,
          artistId: item.artists[0].id,
          trackImageLength: item.album.images.length,
          trackImage: item.album.images[0].url,
          trackName: item.name,
          trackArtist: item.artists[0].name,
          trackIsPlaying: data.is_playing,
          trackProgress: data.progress_ms,
          trackDuration: item.duration_ms,
        });
      }
    };
    // setInterval(() => {
      getCurrentTrack();
    // }, 1000);
  }, [ token]);

  return (
    <>
      <div className="container grid">
        {token ?
          <Header
          token={token}
          setToken={setToken}
          trackResults={trackResults}
          setTrackResults={setTrackResults}
          setTrackTotal={setTrackTotal}
          setArtistResults={setArtistResults}
          setArtistTotal={setArtistTotal}
          setAlbumResults={setAlbumResults}
          setAlbumTotal={setAlbumTotal}
          setPlaylistResults={setPlaylistResults}
          setPlaylistTotal={setPlaylistTotal}
          />
          : null
        }
        {token ? 
          <Navigation token={token} />
          : null
        }
        <Routes>
          <Route
            path="/"
            element={
              token ? 
                <Main
                  token={token}
                  queue={queue}
                  setQueue={setQueue}
                  currentTrack={currentTrack}
                  notPlaying={notPlaying}
                  topTracksDate={topTracksDate}
                  setTopTracksDate={setTopTracksDate}
                  showTopTracks={showTopTracks}
                  setShowTopTracks={setShowTopTracks}
                  topArtistsDate={topArtistsDate}
                  setTopArtistsDate={setTopArtistsDate}
                  showTopArtists={showTopArtists}
                  setShowTopArtists={setShowTopArtists}
                /> 
                : <WelcomePage />
            }
          >
          </Route>
          <Route
            path="/top-tracks"
            element={ 
              token ?
              <TopTracksPage
                token={token}
                topTracksDate={topTracksDate}
                setTopTracksDate={setTopTracksDate}
                showTopTracks={showTopTracks}
                setShowTopTracks={setShowTopTracks}
              />
              : <WelcomePage />
            }
          >
          </Route>
          <Route
            path="/top-artists"
            element={
              token ?
              <TopArtistsPage
                token={token}
                topArtistsDate={topArtistsDate}
                setTopArtistsDate={setTopArtistsDate}
                showTopArtists={showTopArtists}
                setShowTopArtists={setShowTopArtists}
              /> 
              : <WelcomePage />
            }
          >
          </Route>
          <Route
            path="/search-results"
            element={
              token ?
              <SearchResultsPage
                trackResults={trackResults}
                trackTotal={trackTotal}
                artistResults={artistResults}
                artistTotal={artistTotal}
                albumResults={albumResults}
                albumTotal={albumTotal}
                playlistResults={playlistResults}
                playlistTotal={playlistTotal}
              />
              : <WelcomePage />
            }
          >
          </Route>
          <Route
            path="/album/:albumId/:artistId"
            element={
              token ?
              <Album token={token} />
              : <WelcomePage />
            }
          >
          </Route>
        </Routes>
        {token ?
          <Footer
          token={token}
          currentTrack={currentTrack}
          setCurrentTrack={setCurrentTrack}
          setQueue={setQueue}
        />
        : null
        }
      </div>
    </>
  );
}

export default App;
