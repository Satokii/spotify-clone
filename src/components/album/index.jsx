import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Album({ token }) {

    const { albumId } = useParams()

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
      }, [albumId, token]);

    return (
        <section></section>
    )
}

export default Album