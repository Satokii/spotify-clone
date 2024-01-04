import axios from "axios";

// API CALL TO SKIP TRACK
const skipTrack = async (token, skipDirection) => {
  await axios.post(
    `https://api.spotify.com/v1/me/player/${skipDirection}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
};

export default skipTrack