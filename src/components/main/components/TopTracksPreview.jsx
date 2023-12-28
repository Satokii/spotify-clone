import { useEffect, useState } from "react";
import axios from "axios";

function TopTracksPreview({ token }) {
  const [topTracksPview, setTopTracksPview] = useState([]);

  useEffect(() => {
    const getTopTracksPview = async () => {
      const { data } = await axios.get(
        "https://api.spotify.com/v1/me/top/tracks",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            time_range: "long_term",
            limit: 20,
          },
        }
      );
      setTopTracksPview(data.items);
    };
    getTopTracksPview();
  }, [token]);

  return (
    <section className="top-track-pview--container grid">
      <h3 className="top-track-pview--header">All Time Top Tracks Preview</h3>
      <ul className="top-track-pview--list grid">
        {topTracksPview.map((track, index) => 
            <li className="top-track-pview--item grid" key={track.id}>
                <p className="top-track-pview--item-rank">{`${index + 1}.`}</p>
                <img src={track.album.images[0].url} alt={`${track.name} image`} width={80} />
                <div className="top-track-pview--item-text">
                    <p className="top-track-pview--item-name">{track.name}</p>
                    <p className="top-track-pview--item-artist">{track.artists[0].name}</p>
                </div>
            </li>    
        )}
      </ul>
    </section>
  );
}

export default TopTracksPreview;
