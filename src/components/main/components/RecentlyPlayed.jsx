import { useEffect, useState } from "react";
import axios from "axios";

function RecentlyPlayed({ token }) {
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  const [recentlyPlayedPlayCount, setRecentlyPlayedPlayCount] = useState([])

  useEffect(() => {
    const getRecentlyPlayed = async () => {
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
    getRecentlyPlayed()
  }, [token]);

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
      calcTimesPlayed()
  }, [recentlyPlayed])

  console.log(recentlyPlayedPlayCount)

  return (
    <section className="recently-played--container grid">
        <h3 className="recently-played--header">Recently Played</h3>
        <ul className="recently-played--list grid">
            {recentlyPlayedPlayCount.map((track, index) => 
                <li className="recently-played--item grid" key={track.id}>
                    <p className="recently-played--time-played">{track.played_at}</p>
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
        </ul>
    </section>
  )
}

export default RecentlyPlayed;
