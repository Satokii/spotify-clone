import axios from "axios";
import getDevices from "./functions/getDevices";
import handleDeviceVolumeChanges from "./functions/handleDeviceVolumeChanges";

import "./styles/volume-controls-container.css";
import "./styles/volume-slider.css";
import { useEffect, useState } from "react";

function VolumeControls({ token }) {
  const [availableDevices, setAvailableDevices] = useState([]);
  const [volume, setVolume] = useState();

  // TURN ON SET INTERVAL FOR REAL-TIME UPDATES TO VOLUME SLIDER WHEN VOLUME IS CHANGED ON A DEVICE
  useEffect(() => {
    // setInterval(() => {
    getDevices(token, setAvailableDevices);
    // }, 1000);
  }, [token]);

  useEffect(() => {
    handleDeviceVolumeChanges(availableDevices, setVolume);
  }, [availableDevices]);

  useEffect(() => {
    const changeVolume = async () => {
      await axios.put(
        "https://api.spotify.com/v1/me/player/volume",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            volume_percent: Number(volume),
          },
        }
      );
    };
    changeVolume();
  }, [token, volume]);

  return (
    <section className="volume-controls-container grid">
      <div>Mute</div>
      <div className="volume-slide-container grid">
        <input
          className="volume-slider"
          type="range"
          name="volume-slider"
          min={0}
          max={100}
          step={1}
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          onMouseUp={(e) => setVolume(e.target.value)}
          onMouseDown={(e) => setVolume(e.target.value)}
        />
      </div>
    </section>
  );
}

export default VolumeControls;
