import axios from "axios";

const getAlbum = async (token, albumId, setAlbumTracksArr, setAlbumInfo, setCopyrights) => {
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
      // const { tracks } = data
    setAlbumTracksArr(data.tracks.items);
    setCopyrights(data.copyrights)
    setAlbumInfo({
      name: data.name,
      img: data.images[0].url,
      type: data.album_type,
      releaseDate: data.release_date,
      totalTracks: data.total_tracks,
      // tracks: tracks.items,
      // time: tracks.items.map((track) => track.duration_ms),
      // isExplicit: tracks.items.map((track) => track.explicit),
      // copyrights: data.copyrights.map(copyright => copyright.text)
    });
};

export default getAlbum