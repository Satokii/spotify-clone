import "./styles/volume-controls-container.css"
import "./styles/volume-slider.css";

function VolumeControls() {
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
        //   value={50}
          //   onChange={(e) => {
          //     setSliderVal(e.target.value);
          //   }}
          //   onMouseUp={(e) =>
          //     calcSeekPosition(e.target.value, currentTrack, setManualSeekVal)
          //   }
        />
      </div>
    </section>
  );
}

export default VolumeControls;
