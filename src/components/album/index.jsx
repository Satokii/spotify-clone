import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./styles/album-page.css"

function Album({ token }) {

    const [albumInfo, setAlbumInfo] = useState({})
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
        //   setAlbumInfo(data)
          setAlbumInfo({
            name: data.name,
            img: data.images[0].url,
            type: data.album_type
          })
        };
          getAlbum();
      }, [albumId, token]);

    //   const [artistInfo, setArtistInfo] = useState({})

    //   useEffect(() => {
    //     const getArtist = async () => {
    //       const { data } = await axios.get(
    //         `https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0`,
    //         {
    //           headers: {
    //             Authorization: `Bearer ${token}`,
    //           },
    //         }
    //       );
    //       console.log(data)
    //       setAlbumInfo(data)
    //       setArtistInfo({
    //         img: data.images[0].url
    //       })
    //     };
    //       getArtist();
    //   }, [token]);

    return (
        <section className="album-page--container grid" style={{backgroundColor: "blue"}}>
            <div className="album-page--banner grid">
                <div className="album-page--banner-img-container">
                    {albumInfo.img ? <img className="album-page--img" src={albumInfo.img} alt={`${albumInfo.name}-image`} /> : <div className="album-page--img"></div>}
                </div>
                <div className="album-page--banner-info-container grid">
                    <p className="album-page--album-type">{albumInfo.type}</p>
                    <p className="album-page--album-name">{albumInfo.name}</p>
                    <div className="album-page--album-overview-container grid">
                        <div>
                            {/* <img src={artistInfo.img} alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="album-page--controls"></div>
            <div className="album-page--tracks"></div>
            <div className="album-page--more"></div>
        </section>
    )
}

export default Album