import { useEffect, useState } from "react"
import axios from "axios";
import fixLengthPreviews from "../../../shared-functions/fixLengthPreviews";

import "../styles/sidebar-about-artist.css"

function SidebarAboutArtist({ token, currentTrack }) {

    const [artistInfo, setArtistInfo] = useState({})

    useEffect(() => {
        const sidebarArtistDetails = async () => {
            const { data } = await axios.get(
              `https://api.spotify.com/v1/artists/${currentTrack.artistId}`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            setArtistInfo({
                name: fixLengthPreviews(data.name),
                followers: (data.followers.total).toLocaleString(),
                img: data.images[0].url
            })
        };
        sidebarArtistDetails()
    }, [currentTrack.artistId, token])

    return (
        <div className="sidebar--about-artist grid">
            <div className="sidebar--about-artist-header">About the artist</div>
            <img className="sidebar--about-artist-img" src={artistInfo.img} alt="current track artist img" />
            <div className="sidebar--about-artist-details-container grid">
                <div className="sidebar--about-artist-name">{artistInfo.name}</div>
                <div className="sidebar--about-artist-followers">{`${artistInfo.followers} followers`}</div>
                <div className="sidebar--about-artist-follow">follow</div>
             </div>
        </div>
    )
}

export default SidebarAboutArtist