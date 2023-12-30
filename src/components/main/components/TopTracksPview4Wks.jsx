import { useEffect, useState } from "react";
import axios from "axios";

function TopTracksPview4Wks({ token }) {
    const [topTracksPview4Wks, setTopTracksPview4Wks] = useState([]);

  useEffect(() => {
    const getTopTracksPview = async () => {
      const { data } = await axios.get(
        "https://api.spotify.com/v1/me/top/tracks",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            time_range: "short_term",
            limit: 20,
          },
        }
      );
      setTopTracksPview4Wks(data.items);
    };
    getTopTracksPview();
  }, [token]);

  return (
    <section className="preview--container grid">
      <ul className="preview--list grid">
        {topTracksPview4Wks.map((track, index) => 
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

export default TopTracksPview4Wks