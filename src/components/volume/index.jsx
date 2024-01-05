import axios from "axios";

import "./styles/volume-controls-container.css"
import "./styles/volume-slider.css";
import { useEffect, useState } from "react";

function VolumeControls({ token }) {

  const [availableDevices, setAvailableDevices] = useState([])
  const [volume, setVolume] = useState()
  const [manualVolumeSelect, setManualVolumeSelect] = useState()

    // GET DEVICES API CALL
    useEffect(() => {
      const getDevices = async () => {
        const { data } = await axios.get(
          "https://api.spotify.com/v1/me/player/devices",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAvailableDevices(data.devices)
      };
      getDevices()
    }, [token]);

    useEffect(() => {
        const activeDevice = availableDevices.find(device => device.is_active === true)
        console.log(activeDevice)
        if (!activeDevice) setVolume(40)
        else {
          setVolume(activeDevice.volume_percent)
        }
    }, [availableDevices])


    // getVolume()

  useEffect(() => {
    const changeVolume = async () => {
      await axios.put(
        "https://api.spotify.com/v1/me/player/volume", {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            volume_percent: Number(volume)
          },
        }
      );
    };
    changeVolume()
  }, [token, volume])

    // console.log(volume)

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
          //   onChange={(e) => {
          //     setSliderVal(e.target.value);
          //   }}
            // onMouseUp={(e) =>
            //   calcSeekPosition(e.target.value, currentTrack, setManualSeekVal)
            // }
            onChange={(e => setVolume(e.target.value))}
            // onMouseUp={(e => setVolume(e.target.value))}
        />
      </div>
    </section>
  );
}

export default VolumeControls;
