import { useEffect, useState } from "react";
import "./styles/top-tracks-page.css"
import axios from "axios";

function TopTracksPage({ token }) {

    const [allTopTracks, setAllTopTracks] = useState([])

    useEffect(() => {
        const getTopTracksAll = async () => {
          const { data } = await axios.get(
            "https://api.spotify.com/v1/me/top/tracks",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
              params: {
                time_range: "long_term",
                limit: 50,
                // offset: 49
              },
            }
          );
          setAllTopTracks(data.items);
        };
        getTopTracksAll();
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