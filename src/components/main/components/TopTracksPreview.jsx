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
            limit: 10,
          },
        }
      );
      setTopTracksPview(data.items);
    };
    getTopTracksPview();
  }, [token]);

  return (
    <section className="top-track-pview--container grid">
      <h3>Top Tracks Preview</h3>
      <ul className="top-track-pview--list grid">
        {topTracksPview.map(track => 
            <li key={track.id}>
                <img src={track.album.images[0].url} alt={`${track.name} image`} width={50} />
                <p>{track.name}</p>
                <p>{track.artists[0].name}</p>
            </li>    
        )}
      </ul>
    </section>
  );
}

export default TopTracksPreview;
