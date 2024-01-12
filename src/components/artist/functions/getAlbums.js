import axios from "axios";

const getAlbums = async (token, artistId, group, setAlbumObj) => {
    const { data } = await axios.get(
      `https://api.spotify.com/v1/artists/${artistId}/albums`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          include_groups: group
        }
      }
    );
    const { items } = data
    setAlbumObj({
      name: items.name,
      img: items.images[0].url,
      release_date: items.release_date,
      type: items.album_type
    })
    // console.log(data)
};

export default getAlbums