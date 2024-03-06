import axios from "axios";

const getDashboardPlaylists = async (token, category) => {
    const { data } = await axios.get(
        `https://api.spotify.com/v1/browse/categories/${category}/playlists`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
              limit: 12
          }
        }
      );
      return data
}

export default getDashboardPlaylists