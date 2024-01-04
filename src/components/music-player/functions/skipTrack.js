import axios from "axios";

// API CALL TO SKIP TRACK
const skipTrack = async (token, currentTrack, skipDirection) => {
  if (currentTrack.trackProgress > 4000 && skipDirection === "previous") {
    await axios.put(
      "https://api.spotify.com/v1/me/player/seek",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          position_ms: 0,
        },
      }
    );
  } else
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

export default skipTrack;
