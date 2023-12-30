import { useEffect, useState } from "react";
import "./styles/top-tracks-page.css"
import axios from "axios";

function TopTracksPage({ token }) {

    const [allTopTracks, setAllTopTracks] = useState([])

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
            <h2>Top Tracks</h2>
            <ul className="preview--list grid">
                {allTopTracks.map((track, index) => 
                    <li className="preview--item grid" key={track.id}>
                        <p className="preview--item-rank">{`${index + 1}.`}</p>
                        <img src={track.album.images[0].url} alt={`${track.name} image`}/>
                        <div className="preview--item-text">
                            <p className="preview--item-name">{track.name}</p>
                            <p className="preview--item-artist">{track.artists[0].name}</p>
                        </div>
                    </li>    
                )}
            </ul>
        </section>
    )
}

export default TopTracksPage