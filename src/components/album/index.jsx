import { useEffect } from "react";
import axios from "axios";

function Album({ token }) {

    useEffect(() => {
        const getAlbum = async () => {
          const { data } = await axios.get(
            `https://api.spotify.com/v1/albums/${albumId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
              params: {
                id: albumId,
              }
            }
          );
          console.log(data)
        };
          getAlbum();
      }, [ token]);

    return (
        <section></section>
    )
}

export default Album