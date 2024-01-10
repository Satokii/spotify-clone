import { useEffect } from "react";
import axios from "axios";
import getYear from "../../../shared-functions/getYear";

import "../styles/album-more.css"

function AlbumMoreByArtist({ token, artistId, artistInfo, artistAlbums, setArtistAlbums }) {

    useEffect(() => {
        const getArtistAlbums = async () => {
          const { data } = await axios.get(
            `https://api.spotify.com/v1/artists/${artistId}/albums`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
              params: {
                limit: 6,
                include_groups: "album,single"
              },
            }
          );
            const { items } = data
            setArtistAlbums(items)
        };
      getArtistAlbums()
      }, [artistId, setArtistAlbums, token])  

    return (
        <div className="album-page--more-by-artist grid">
            <div className="more-by-artist-header">{`More by ${artistInfo.name}`}</div>
            <div className="more-by-artist-album-list grid">
                {artistAlbums.map(album =>
                    <div className="more-by-artist--item-container grid" key={album.id}>
                        <div className="more-by-artist--album-img">
                            {album.images.length ? (
                            <img src={album.images[0].url} alt={album.name} />
                            ) : (<div></div>
                            )}
                        </div>
                        <div className="more-by-artist--album-name">{album.name}</div>
                        <div className="more-by-artist--album-date">{getYear(album.release_date)}</div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AlbumMoreByArtist