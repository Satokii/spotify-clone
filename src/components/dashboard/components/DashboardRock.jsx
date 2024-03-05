import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import scrollToTop from "../../../shared-functions/scrollToTop";
import PlayGreen from "../../../assets/svgs/main-app/main-play-btn.svg"
import fixLenthPlistDesc from "../../../shared-functions/fixLengthPlistDesc";

function DashboardRock({ token }) {

    const [newRock, setNewRock] = useState([])

    useEffect(() => {
        const getTopFeaturedPlaylists = async () => {
            const { data } = await axios.get(
              `https://api.spotify.com/v1/browse/categories/rock/playlists`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
                params: {
                    limit: 10
                }
              }
            );
            setNewRock(data.playlists.items)
        };
        getTopFeaturedPlaylists()
    }, [token])

    return (
      <div className="dashboard--top-featured-playlists grid">
      <div className="dashboard--top-featured-playlists-header-container grid">
          <div className="dashboard--top-featured-playlists-header">Rock</div>
          <div className="dashboard--top-featured-playlists-show-all">Show all</div>
      </div>
      <div className="dashboard--top-featured-playlists-list grid">
      {newRock.map(playlist =>
              <Link className="top-featured-playlist--item-container grid" key={playlist.id} to={`/playlist/${playlist.id}`} onClick={scrollToTop} >
                  <div className="top-featured-playlist--img-container">
                      {playlist.images.length ?
                      <div className="top-featured-playlist--img">
                        <img src={playlist.images[0].url} alt={playlist.name} />
                        <img className="top-featured-playlist--play" src={PlayGreen} alt="play button" />
                      </div>
                      : <div></div>
                      }
                  </div>
                  <div className="top-featured-playlist--name">{playlist.name}</div>
                  <div className="top-featured-playlist--description">{fixLenthPlistDesc(playlist.description)}</div>
              </Link>
          )}
      </div>
  </div>
    )
}

export default DashboardRock