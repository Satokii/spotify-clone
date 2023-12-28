import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Buffer } from "buffer";
import Header from "./components/header";

import './app.css'

function App() {
  const [token, setToken] = useState("");

  const [artists, setArtists] = useState([]);
  const [topTracks, setTopTracks] = useState([]);
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  const [playCount, setPlayCount] = useState([]);

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

  const getTopTracks = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(
      "https://api.spotify.com/v1/me/top/tracks",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          time_range: "long_term",
          limit: 10,
        },
      }
    );
    // console.log(data)
    setTopTracks(data.items);
  };

  const renderTopTracks = () => {
    return topTracks.map((track) => (
      <div key={track.id}>
        <p>
          Song: {track.name} by: {track.artists[0].name}
        </p>
      </div>
    ));
  };

  const getRecentlyPlayed = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(
      "https://api.spotify.com/v1/me/player/recently-played",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          limit: 50,
        },
      }
    );
    console.log(data.items);
    setRecentlyPlayed(data.items);
  };

  const renderRecentlyPlayed = () => {
    return recentlyPlayed.map((track) => (
      <div key={track.track.id}>
        <p>Song: {track.track.name}</p>
      </div>
    ));
  };

  const calcTimesPlayed = () => {
    const newArr = [];
    recentlyPlayed.forEach((track) => {
      const checkDups = newArr.find(
        (updatedTrack) => updatedTrack.track.id === track.track.id
      );
      if (checkDups) {
        checkDups.timesPlayed += 1;
      } else {
        const updated = { ...track, timesPlayed: 1 };
        newArr.push(updated);
      }
    });
    console.log(newArr);
    setPlayCount(newArr);
  };

  const renderPlayCount = () => {
    return playCount.map((track) => (
      <div key={track.id}>
        <p>
          Song: {track.track.name}, times played: {track.timesPlayed}, time
          spent listening:{" "}
          {new Date(track.timesPlayed * track.track.duration_ms)
            .toISOString()
            .substring(11, 19)}
        </p>
      </div>
    ));
  };

  return (
    <>
      <div className="container grid">
        <Header token={token} setToken={setToken} />
        <main>
          <div>
            <button onClick={getTopTracks}>Get Top Tracks</button>
            {renderTopTracks()}
          </div>
          <hr />
          <div>
            <button onClick={getRecentlyPlayed}>Get Recently Played</button>
            {renderRecentlyPlayed()}
          </div>
          <hr />
          <div>
            <button onClick={calcTimesPlayed}>Times played</button>
            {renderPlayCount()}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
