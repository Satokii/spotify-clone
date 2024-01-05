import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./styles/album-page.css"

function Album({ token }) {

    const [albumInfo, setAlbumInfo] = useState([])
    const { albumId } = useParams()

    // const bg = document.querySelector(".album-page--container")

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
          setAlbumInfo(data)
        };
          getAlbum();
      }, [albumId, token]);

    return (
        <section className="album-page--container grid" style={{backgroundColor: "blue"}}>
            <div className="album-page--banner"></div>
            <div className="album-page--controls"></div>
            <div className="album-page--tracks"></div>
            <div className="album-page--more"></div>
        </section>
    )
}

export default Album