import axios from "axios";

import "./styles/music-player.css"

function MusicPlayer({ token, isPlaying, setIsPlaying }) {

        const changePlayerState = async () => {
          const playState = isPlaying ? "pause" : "play"
          await axios.put(
            `https://api.spotify.com/v1/me/player/${playState}`, {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
              },
            }
          );
        setIsPlaying(!isPlaying)
        };

    return (
        <section>
            <h3>Playback</h3>
            <button onClick={changePlayerState}>play</button>
    
          <div className='song-player-container'>

            <div className='song-details'>
              <p className='song-name'></p>
              <p className='artist-name'></p>
            </div>

            <div className='song-controls'>

              <div className='reverse-song'>
                <i className="fa fa-step-backward reverse" aria-hidden="true" />
              </div>

              <div className='play-btn'>
                <i className="fa play-btn" aria-hidden="true" />
              </div>

              <div className='next-song'>
                <i className="fa fa-step-forward forward" aria-hidden="true" />
              </div>

            </div>

            <div className='song-progress-container'>
              <p className='timer-start'></p>
              <div className='song-progress'>
                <div className='song-expired' />
              </div>
              <p className='timer-end'></p>
            </div>

          </div>
        </section>
    )
}

export default MusicPlayer