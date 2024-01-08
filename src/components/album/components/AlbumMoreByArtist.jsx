import { useEffect } from "react";
import axios from "axios";
import getYear from "../../../shared-functions/getYear";

import "../styles/album-more.css"

function AlbumMoreByArtist({ token, artistId, artistAlbums, setArtistAlbums }) {

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
            console.log(items)
            setArtistAlbums(items)
        };
      getArtistAlbums()
      }, [artistId, setArtistAlbums, token])  

    return (
        <div className="album-page--more-by-artist grid">
            {artistAlbums.map(album =>
                <div  key={album.id}>
                <div className="album-overview--more-img">
                    {album.images.length ? (
                    <img src={album.images[0].url} alt={album.name} />
                    ) : (<div></div>
                    )}
                </div>
                <div className="album-overview-more-name">{album.name}</div>
                <div>{getYear(album.release_date)}</div>
                </div>
            )}
        </div>
    )
}

export default AlbumMoreByArtist