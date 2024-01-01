import { useEffect, useState } from "react";
import axios from "axios";
import fixLengthPreviews from "../../../shared-functions/fixLengthPreviews";

function TopTracksPreview({ token, showTopTracks }) {
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
            time_range: showTopTracks,
            limit: 20,
          },
        }
      );
      setTopTracksPview(data.items);
    };
    getTopTracksPview();
  }, [showTopTracks, token]);

  return (
    <section className="preview--container grid">
      <ul className="preview--list grid">
        {topTracksPview.map((track, index) => 
            <li className="preview--item grid" key={`${track.id}-${index}`}>
                <p className="preview--item-rank">{`${index + 1}.`}</p>
                {track.album.images.length ? <img src={track.album.images[0].url} alt={`${track.name} image`}/> : <div>No Image</div>}
                <div className="preview--item-text">
                    <p className="preview--item-name">{fixLengthPreviews(track.name)}</p>
                    <p className="preview--item-artist">{fixLengthPreviews(track.artists[0].name)}</p>
                </div>
            </li>    
        )}
      </ul>
    </section>
  );
}

export default TopTracksPreview;
