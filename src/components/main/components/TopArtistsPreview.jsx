import { useEffect, useState } from "react";
import axios from "axios";

function TopArtistsPreview({ token }) {
    const [topArtistsPview, setTopArtistsPview] = useState([]);

    useEffect(() => {
      const getTopTracksPview = async () => {
        const { data } = await axios.get(
          "https://api.spotify.com/v1/me/top/artists",
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
        setTopArtistsPview(data.items);
      };
      getTopTracksPview();
    }, [token]);

    return (
        <section className="preview--container grid">
        <h3 className="preview--header">All Time Top Artists Preview</h3>
        <ul className="preview--list grid">
          {topArtistsPview.map((artist, index) => 
              <li className="preview--item grid" key={artist.id}>
                  <p className="preview--item-rank">{`${index + 1}.`}</p>
                  <img src={artist.images[0].url} alt={`${artist.name} image`} />
                  <div className="preview--item-text preview-top-artists">
                      <p className="preview--item-name">{artist.name}</p>
                  </div>
              </li>    
          )}
        </ul>
      </section>
    )
}
export default TopArtistsPreview