import './styles/footer.css'

function Footer() {

    return (
        <footer className='footer'>
            {/* <div className='song-player-container grid'/>
            <div className='song-controls grid'>
              <div className='back-btn' onClick={() => skipTrack(token, currentTrack, "previous")}>
                <img src={backButton} alt="skip back button" />
              </div>
              <div className='play-btn' onClick={() => changePlayerState(token, currentTrack, setCurrentTrack)}>
                <img src={togglePlayBtn} alt="play/pause button" />
              </div>
              <div className='forward-btn' onClick={() => skipTrack(token, "next")}>
                <img src={forwardButton} alt="skip forward button" />
              </div>
            </div>
            <div className='song-progress-bar-container grid'>
              <p className='song-start'>{renderCurrentTrackTime()}</p>
              <div className="slide-container">
                <input className='slider' type="range" name="song-expired" min={0} max={100} step={1} value={sliderVal} onChange={e => {setSliderVal(e.target.value)}} onMouseUp={e => calcSeekPosition(e.target.value)} />
              </div>
              <p className='song-end'>{calcTrackTime(currentTrack.trackDuration)}</p>
            </div> */}
        </footer>
    )
}

export default Footer