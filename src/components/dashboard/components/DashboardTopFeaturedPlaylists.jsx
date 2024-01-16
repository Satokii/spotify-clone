import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import scrollToTop from "../../../shared-functions/scrollToTop";
import PlayGreen from "../../../assets/svgs/main-app/main-play-btn.svg"

function DashboardTopFeaturedPlaylists({ token }) {

    const [topPlaylists, setTopPlaylists] = useState([])

    useEffect(() => {
        const getTopFeaturedPlaylists = async () => {
            const { data } = await axios.get(
              `https://api.spotify.com/v1/browse/featured-playlists`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
                params: {
                    limit: 10
                }
              }
            );
            setTopPlaylists(data.playlists.items)
            console.log(data.playlists.items)
        };
        getTopFeaturedPlaylists()
    }, [token])

    return (
        <div className="dashboard--top-featured-playlists">
            <div className="dashboard--top-featured-playlists-header">Featured Playlists Where You Are</div>
            <div className="dashboard--top-featured-playlists-list">
            {topPlaylists.map(playlist =>
                    <Link className="top-featured-playlist--item-container grid" key={playlist.id} to={``} onClick={scrollToTop} >
                        <div className="top-featured-playlist--img">
                            {playlist.images.length ?
                            <div className="top-featured-playlist--img-container">
                              <img src={playlist.images[0].url} alt={playlist.name} />
                              <img className="top-featured-playlist--play" src={PlayGreen} alt="play button" />
                            </div>
                            : <div></div>
                            }
                        </div>
                        <div className="top-featured-playlist--name">{playlist.name}</div>
                        <div className="more-by-artist--album-date">{playlist.description}</div>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default DashboardTopFeaturedPlaylists