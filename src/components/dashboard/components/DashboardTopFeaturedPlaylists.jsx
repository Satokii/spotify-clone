import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fixLenthPlistDesc from "../../../shared-functions/fixLengthPlistDesc";
import scrollToTop from "../../../shared-functions/scrollToTop";
import PlayGreen from "../../../assets/svgs/main-app/main-play-btn.svg"

import "../styles/dashboard-top-playlists.css"

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
            // console.log(data.playlists.items)
        };
        getTopFeaturedPlaylists()
    }, [token])

    return (
        <div className="dashboard--top-featured-playlists grid">
            <div className="dashboard--top-featured-playlists-header-container grid">
                <div className="dashboard--top-featured-playlists-header">Featured Playlists Where You Are</div>
                <div className="dashboard--top-featured-playlists-show-all">Show all</div>
            </div>
            <div className="dashboard--top-featured-playlists-list grid">
            {topPlaylists.map(playlist =>
                    <Link className="top-featured-playlist--item-container grid" key={playlist.id} to={``} onClick={scrollToTop} >
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

export default DashboardTopFeaturedPlaylists