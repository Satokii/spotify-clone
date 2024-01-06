import axios from "axios";

const getAlbum = async (token, albumId, setAlbumTracksArr, setAlbumInfo) => {
    const { data } = await axios.get(
      `https://api.spotify.com/v1/albums/${albumId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          id: albumId,
        },
      }
    );
      // console.log(data)
    setAlbumTracksArr(data.tracks.items);
    setAlbumInfo({
      name: data.name,
      img: data.images[0].url,
      type: data.album_type,
      releaseDate: data.release_date,
      totalTracks: data.total_tracks,
      tracks: data.tracks.items,
      time: data.tracks.items.map((track) => track.duration_ms),
    });
};

export default getAlbum