import { useEffect, useState } from "react"
import axios from "axios"
import PlayGreen from "../../../assets/svgs/main-app/main-play-btn.svg"
import GrayCircle from "../../../assets/svgs/main-app/gray-circle.svg"
import getYear from "../../../shared-functions/getYear"

import "../styles/artist-appears-on.css"

function ArtistAppearsOn({ token, artistId }) {

    const [appearsOnTracks, setAppearsOnTracks] = useState([])

    useEffect(() => {
        const getAppearsOnTracks = async () => {
            const { data } = await axios.get(
              `https://api.spotify.com/v1/artists/${artistId}/albums`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
                params: {
                    include_groups: 'appears_on',
                    limit: 8
                }
              }
            )
            console.log(data.items)
            const { items } = data
            setAppearsOnTracks(items)
        }
        getAppearsOnTracks()
    }, [artistId, token])

    return (
        <div className="artist-page--appears-on grid">
            <div className="artist--appears-on-header-container grid">
                <h3 className="artist--appears-on-header">Appears On</h3>
                <div className="artist-page--show-all">Show all</div>
            </div>
            <div className="artist--appears-on-list grid">
                {appearsOnTracks.map((track, index) =>
                    <div className="artist--appears-on-single-track grid" key={`${track.name}-${index}`} >
                        <div className="artist--appears-on-img-outer-container">
                            {track.images.length ? 
                            <div className="artist--appears-on-img-container">
                                <img className="artist--appears-on-img" src={track.images[0].url} alt="artist image" />
                                <img className="artist--appears-on-play" src={PlayGreen} alt="play button" />
                            </div>
                            : <div className="artist--appears-on-img"></div>
                            }
                        </div>
                        <div className="artist--appears-on-name">{track.name}</div>
                        <div className="artist--appears-on-extra-details grid">
                            <div className="artist--appears-on-date">{getYear(track.release_date)}</div>
                            <img className="gray-circle" src={GrayCircle} alt="gray circle" />
                            <div className="artist--appears-on-album-type">{track.album_type}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ArtistAppearsOn