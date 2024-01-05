import getDevices from "./functions/getDevices";
import handleDeviceVolumeChanges from "./functions/handleDeviceVolumeChanges";
import changeVolume from "./functions/changeVolume";

import VolumeOnIcon from "../../assets/svgs/volume/volume-on.svg"
import VolumeMuteIcon from "../../assets/svgs/volume/volume-mute.svg"
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
    changeVolume(token, volume);
  }, [token, volume]);

  return (
    <section className="volume-controls-container grid">
      <div>
        <img src={VolumeOnIcon} alt="volume on icon" width={50} />
        <img src={VolumeMuteIcon} alt="volume mute icon" />
      </div>
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