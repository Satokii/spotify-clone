import axios from "axios";

const getPopularReleases = async (token, artistId, setPopularReleases) => {
    const { data } = await axios.get(
      `https://api.spotify.com/v1/artists/${artistId}/top-tracks`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
            market: 'GB'
        }
      }
    );
    const { tracks } = data
    setPopularReleases(tracks)
  };

  export default getPopularReleases