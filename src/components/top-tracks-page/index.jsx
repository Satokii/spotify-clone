import { useEffect, useState } from "react";
import "./styles/top-tracks-page.css"
import axios from "axios";
import { Link } from "react-router-dom";
import { useSharedTopTracksDate } from "../main";

function TopTracksPage({ token, setShowTopTracks }) {
  
    const [allTopTracks, setAllTopTracks] = useState([])
    const [selectedDateRange, setSelectedDateRange] = useState('long')
    const [topTracksDate, setTopTracksDate] = useSharedTopTracksDate()

    const toggleTopTracksDate = (selectedDate) => {
      const updatedTopTracks = topTracksDate.map((date) => {
        if (date.name === selectedDate.target.innerText) {
          return { ...date, className: "active-date-filter" };
        } else {
          return { ...date, className: "inactive-date-filter" };
        }
      });
      setTopTracksDate(updatedTopTracks);
    };

    useEffect(() => {
        let top50
        let top51To99
        const getTop50TracksAll = async () => {
          const { data } = await axios.get(
            "https://api.spotify.com/v1/me/top/tracks",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
              params: {
                time_range: "long_term",
                limit: 50,
              },
            }
          );
          top50 = data.items
        };
        const getTop51To99TracksAll = async () => {
            await getTop50TracksAll()
            const { data } = await axios.get(
              "https://api.spotify.com/v1/me/top/tracks",
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
                params: {
                  time_range: "long_term",
                  limit: 50,
                  offset: 49
                },
              }
            );
            top51To99 = data.items
            top51To99.shift()
            const combinedTracks = top50.concat(top51To99)
            setAllTopTracks(combinedTracks);
          };
          getTop51To99TracksAll();
      }, [token]);

    return (
        <section className="top-tracks-page--container grid">
            <Link
                className="top-tracks-page--back-btn btn"
                to="/"
            >
                Go back
            </Link>
            <ul className="date-filter-list grid">
              {topTracksDate.map((dateFilter, index) => (
              <li
                key={`${dateFilter.title}-${index}`}
                className={dateFilter.className}
                onClick={(e) => {
                  toggleTopTracksDate(e);
                  setShowTopTracks(dateFilter.click);
                }}
              >
                {dateFilter.name}
              </li>
              ))}
            </ul>
            <h2 className="top-tracks-page--header">Top Tracks</h2>
            <ul className="top-tracks-page--list grid">
                {allTopTracks.map((track, index) => 
                    <li className="top-tracks-page--item grid" key={track.id}>
                        <p className="top-tracks-page--item-rank">{`${index + 1}`}</p>
                        <img src={track.album.images[0].url} alt={`${track.name} image`}/>
                        <p className="top-tracks-page--item-name">{track.name}</p>
                        <p className="top-tracks-page--item-artist">{track.artists[0].name}</p>
                    </li>    
                )}
            </ul>
        </section>
    )
}

export default TopTracksPage