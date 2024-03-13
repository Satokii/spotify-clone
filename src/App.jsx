import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/login-page";
import WelcomePage from "./components/welcome-page";
import Navigation from "./components/navigation";
import Dashboard from "./components/dashboard";
import Album from "./components/album";
import Artist from "./components/artist";
import Playlist from "./components/playlist";
import UserPlaylist from "./components/user-playlist";
import LikedSongs from "./components/liked-songs";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import TopTracksPage from "./components/full-top-results/top-tracks-page";
import TopArtistsPage from "./components/full-top-results/top-artists-page";
import SearchPage from "./components/search-page";
import axios from "axios";
import CURRENT_TRACK_INITIAL_STATE from "./initial-states/CURRENT_TRACK_INITIAL_STATE";
import TRACKS_INITIAL_STATE from "./initial-states/TRACKS-INITIAL-STATE";
import ARTISTS_INITIAL_STATE from "./initial-states/ARTISTS-INITIAL-STATE";

import "./app.css";
import "./shared-styles/root.css";
import "./shared-styles/scrollbars.css";
import "./shared-styles/buttons.css";
import "./shared-styles/back-button.css"
import "./shared-styles/middot.css"
import "./keyframes/fade-in.css"
import "./keyframes/text-transform.css"

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
  const [currentTrackArtists, setCurrentTrackArtists] = useState([])
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
        const { item } = data;
        // console.log(data)
        setCurrentTrackArtists(item.artists)
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
          <Navigation token={token} />
          : null
        }
        <Routes>
          <Route
            path="/"
            element={
            token ?
            <Dashboard token={token} queue={queue} setQueue={setQueue} setToken={setToken} currentTrack={currentTrack} notPlaying={notPlaying} />
            : <LoginPage /> 
            }
          >
          </Route>
          <Route
            path="/spotify-login"
            element={
              <WelcomePage />
            }
          >
          </Route>
          <Route
            path="top-played"
            // TODO: Add element component
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
            path="/search"
            element={
              token ?
              <SearchPage token={token} setToken={setToken} />
              : <WelcomePage />
            }
          >
          </Route>
          <Route
            path="/album/:albumId/:artistId"
            element={
              token ?
              <Album token={token} setToken={setToken} />
              : <WelcomePage />
            }
          >
          </Route>
          <Route
            path="/artist/:artistId"
            element={
              token ?
              <Artist token={token} setToken={setToken} />
              : <WelcomePage />
            }
          >
          </Route>
          <Route
            path="/playlist/:playlistId"
            element={
              token ?
              <Playlist token={token} setToken={setToken} />
              : <WelcomePage />
            }
          >
          </Route>
          <Route
            path="/liked-songs"
            element={
              token ?
              <LikedSongs token={token} setToken={setToken} />
              : <WelcomePage />
            }
          >
          </Route>
          <Route
            path="/user-playlist/:playlistId"
            element={
              token ?
              <UserPlaylist token={token} setToken={setToken} />
              : <WelcomePage />
            }
          >
          </Route>
        </Routes>
        {token ?
          <Sidebar token={token} currentTrack={currentTrack} currentTrackArtists={currentTrackArtists} />
          : null
        }
        {token ?
          <Footer
          token={token}
          currentTrack={currentTrack}
          currentTrackArtists={currentTrackArtists}
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
