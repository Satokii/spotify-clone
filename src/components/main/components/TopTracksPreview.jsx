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
    <section className="preview--container grid">
      <h3 className="preview--header">All Time Top Tracks Preview</h3>
      <ul className="preview--list grid">
        {topTracksPview.map((track, index) => 
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
  );
}

export default TopTracksPreview;
