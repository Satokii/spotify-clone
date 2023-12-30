import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import WelcomePage from "./components/welcome-page";
import Navigation from "./components/navigation";
import Main from "./components/main";
import Footer from "./components/footer";
import Logout from "./Logout";
import TopTracksPage from "./components/top-tracks-page";
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

  // TOP TRACKS STATES
  const [topTracksDate, setTopTracksDate] = useState(TRACKS_INITIAL_STATE);
  const [showTopTracks, setShowTopTracks] = useState("long");

  // TOP ARTISTS STATES
  const [topArtistsDate, setTopArtistsDate] = useState(ARTISTS_INITIAL_STATE);
  const [showTopArtists, setShowTopArtists] = useState("long");

  return (
    <>
      <div className="container grid">
        <Header token={token} setToken={setToken} />
        <Navigation token={token} />
        <Routes>
          <Route
            path="/"
            element={token ? <Main token={token} topTracksDate={topTracksDate} setTopTracksDate={setTopTracksDate} showTopTracks={showTopTracks} setShowTopTracks={setShowTopTracks} topArtistsDate={topArtistsDate} setTopArtistsDate={setTopArtistsDate} showTopArtists={showTopArtists} setShowTopArtists={setShowTopArtists} /> : <WelcomePage />}
          >
          </Route>
          <Route
            path="/top-tracks"
            element={<TopTracksPage token={token} topTracksDate={topTracksDate} setTopTracksDate={setTopTracksDate} setShowTopTracks={setShowTopTracks} />}
          >
          </Route>
        </Routes>
        {/* {token ? <Main token={token} /> : <WelcomePage />} */}
        <Footer />
      </div>
    </>
  );
}

export default App;
