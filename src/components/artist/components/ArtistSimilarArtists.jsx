import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import scrollToTop from "../../../shared-functions/scrollToTop";
import PlayGreen from "../../../assets/svgs/main-app/main-play-btn.svg"

import "../styles/artist-similar-artists.css"

function ArtistSimilarArtists({ token, artistId }) {

    const [relatedArtists, setRelatedArtists] = useState([])

    useEffect(() => {
        const getRelatedArtists = async () => {
            const { data } = await axios.get(
              `https://api.spotify.com/v1/artists/${artistId}/related-artists`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                }
              }
            )
            const { artists } = data
            console.log(data.artists)
            setRelatedArtists(artists)
        }
        getRelatedArtists()
    }, [artistId, token])
console.log(relatedArtists)
    return (
        <div className="artist-page--similar-artists grid">
            <div className="artist--similar-artists-header-container grid">
                <h3 className="artist--similar-artists-header">Fans Also Like</h3>
                <div className="artist-page--show-all">Show all</div>
            </div>
            <div className="artist--similar-artists-list grid">
                {relatedArtists.map((artist, index) =>
                    <Link className="artist--similar-artists-single-artist grid" key={`${artist.name}-${index}`} to={`/artist/${artist.id}`} onClick={scrollToTop}>
                        {artist.images.length ? 
                        <div className="artist--similar-artists-img-container">
                            <img className="artist--similar-artists-img" src={artist.images[0].url} alt="artist image" />
                            <img className="artist--similar-artists-play" src={PlayGreen} alt="play button" />
                        </div>
                        : <div className="artist--similar-artists-img"></div>
                        }
                        <div className="artist--similar-artists-name">{artist.name}</div>
                        <div className="artist--similar-artists-type">{artist.type}</div>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default ArtistSimilarArtists