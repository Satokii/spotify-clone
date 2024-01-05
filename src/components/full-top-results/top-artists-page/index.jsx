import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toggleTopArtistsDate from "../../../shared-functions/toggleTopArtistsDate";

import "../styles/top-results-pages.css"

function TopArtistsPage({ token, topArtistsDate, setTopArtistsDate, showTopArtists, setShowTopArtists }) {
  
    const [allTopArtists, setAllTopArtists] = useState([])

    useEffect(() => {
        let top50
        let top51To99
        const getTop50TracksAll = async () => {
          const { data } = await axios.get(
            "https://api.spotify.com/v1/me/top/artists",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
              params: {
                time_range: showTopArtists,
                limit: 50,
              },
            }
          );
          top50 = data.items
        };
        const getTop51To99TracksAll = async () => {
            await getTop50TracksAll()
            const { data } = await axios.get(
              "https://api.spotify.com/v1/me/top/artists",
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
                params: {
                  time_range: showTopArtists,
                  limit: 50,
                  offset: 49
                },
              }
            );
            top51To99 = data.items
            top51To99.shift()
            const combinedTracks = top50.concat(top51To99)
            setAllTopArtists(combinedTracks);
          };
          getTop51To99TracksAll();
      }, [showTopArtists, token]);

    return (
        <section className="top-results-page--container grid">
          <div className="top-results-page--header-container grid">
            <Link
                className="page--back-btn btn"
                to="/"
            >
                Go back
            </Link>
            <h2 className="top-results-page--header">Top Artists</h2>
          </div>
            <ul className="top-results-page--filter date-filter-list grid">
              {topArtistsDate.map((dateFilter, index) => (
              <li
                key={`${dateFilter.title}-${index}`}
                className={dateFilter.className}
                onClick={(e) => {
                  toggleTopArtistsDate(e, topArtistsDate, setTopArtistsDate);
                  setShowTopArtists(dateFilter.click);
                }}
              >
                {dateFilter.name}
              </li>
              ))}
            </ul>
            <ul className="top-results-page--list grid">
                {allTopArtists.map((artist, index) => 
                    <li className="top-results-page--item grid" key={`${artist.id}-${index}`}>
                        <p className="top-results-page--item-rank">{`${index + 1}`}</p>
                        {artist.images.length ? <img src={artist.images[0].url} alt={`${artist.name} image`}/> : <div>No Image</div>}
                        <p className="top-results-page--item-name">{artist.name}</p>
                    </li>    
                )}
            </ul>
        </section>
    )
}

export default TopArtistsPage