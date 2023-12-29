import { useEffect, useState } from "react";
import axios from "axios";
import { useCallback } from "react";

function RecentlyPlayed({ token }) {
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  const [recentlyPlayedPlayCount, setRecentlyPlayedPlayCount] = useState([]);

  const getRecentlyPlayed = useCallback(async () => {
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
  }, [token]);

  useEffect(() => {
    getRecentlyPlayed();
  }, [getRecentlyPlayed, token]);

  useEffect(() => {
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
      setRecentlyPlayedPlayCount(newArr);
    };
    calcTimesPlayed();
  }, [recentlyPlayed]);

  const timeNow = new Date();

  const msToTime = (ms) => {
    let seconds = (ms / 1000).toFixed(0);
    let minutes = (ms / (1000 * 60)).toFixed(0);
    let hours = (ms / (1000 * 60 * 60)).toFixed(0);
    let days = (ms / (1000 * 60 * 60 * 24)).toFixed(0);
    if (seconds < 2) return seconds + " second";
    else if (seconds < 60) return seconds + " seconds";
    else if (minutes < 2) return minutes + " minute";
    else if (minutes < 60) return minutes + " minutes";
    else if (hours < 2) return hours + " hour";
    else if (hours < 24) return hours + " hours";
    else if (days < 2) return days + " day";
    else return days + " days";
  };

  //   console.log(recentlyPlayedPlayCount)

  return (
    <section className="recently-played--container grid">
      <div className="recently-played--header-container grid">
        <h3 className="recently-played--header">Recently Played</h3>
        <button className="recently-played--refresh-btn btn" onClick={getRecentlyPlayed}>Refresh</button>
      </div>
      {/* <ul className="recently-played--list grid">
            {recentlyPlayedPlayCount.map((track, index) => 
                <li className="recently-played--item grid" key={track.id}>
                    <p className="recently-played--time-played">{`Played ${msToTime(timeNow - new Date(track.played_at))} ago`}</p>
                    <img src={track.track.album.images[0].url} alt={`${track.track.name} image`} />
                    <p className="recently-played--text">
                        Song: {track.track.name}, times played: {track.timesPlayed}, time
                        spent listening:{" "}
                        {new Date(track.timesPlayed * track.track.duration_ms)
                            .toISOString()
                            .substring(11, 19)}
                    </p>
                </li>
            )}
        </ul> */}
      <ul className="recently-played--list grid">
        {recentlyPlayed.map((track) => (
          <li className="recently-played--item grid" key={track.id}>
            <p className="recently-played--time-since-played">{`Played ${msToTime(
              timeNow - new Date(track.played_at)
            )} ago`}</p>
            <img
              src={track.track.album.images[0].url}
              alt={`${track.track.name} image`}
            />
            <div className="recently-played--item-text">
                <p className="recently-played--item-name">{track.track.name}</p>
                <p className="recently-played--item-artist">{track.track.artists[0].name}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default RecentlyPlayed;
