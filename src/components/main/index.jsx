import { useState } from "react";
import axios from "axios";
import TopTracksPreview from "./components/TopTracksPreview";
import TopTracksPview6Mths from "./components/TopTracksPview6Mths";
import TopTracksPview4Wks from "./components/TopTracksPview4Wks";
import TopArtistsPreview from "./components/TopArtistsPreview";
import TopArtistsPview6mths from "./components/TopArtistsPview6Mths";
import TopArtistsPview4Wks from "./components/TopArtistsPview4Wks";
import './styles/main.css'

function Main({ token }) {

    const [topTracks, setTopTracks] = useState([]);
    const [recentlyPlayed, setRecentlyPlayed] = useState([]);
    const [playCount, setPlayCount] = useState([]);

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
        <main className="main grid">
            <TopTracksPreview token={token} />
            <TopTracksPview6Mths token={token} />
            <TopTracksPview4Wks token={token} />
            <TopArtistsPreview token={token} />
            <TopArtistsPview6mths token={token} />
            <TopArtistsPview4Wks token={token} />
          <div>
            <button onClick={getTopTracks}>Get Top Tracks</button>
            {/* {renderTopTracks()} */}
          </div>
          <div>
            <button onClick={getRecentlyPlayed}>Get Recently Played</button>
            {/* {renderRecentlyPlayed()} */}
          </div>
          <div>
            <button onClick={calcTimesPlayed}>Times played</button>
            {/* {renderPlayCount()} */}
          </div>
        </main>
    )
}

export default Main