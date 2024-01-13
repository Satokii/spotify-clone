import { useEffect, useState } from "react"
import axios from "axios"

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

            </div>
        </div>
    )
}

export default ArtistAppearsOn