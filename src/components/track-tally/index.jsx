import { useEffect, useState } from "react"
import axios from "axios"
import './styles/track-tally.css'

function TrackTally() {

    const [tracks, setTracks] = useState([])

    useEffect(()=> {
        const getTrackData = async () => {
            const { data } = await axios.get(`http://localhost:4000/tracks`,
            {
                headers: { 'Content-Type': 'application/json' },
            }
            );
            setTracks(data.tracks)
        }
        getTrackData()
    }, [])
    console.log('tracks', tracks)

    return (
        <div className="track-tally--outer-container">
            <div className="track-tally--scrollbar">
                <section className="track-tally--container">
                    <h2>What you've been listening to</h2>
                        {tracks.map((track, index) => 
                            <div key={`${track.id}-${index}`}>
                                <p>{track.track_name}</p>
                                <p>{track.tally}</p>
                            </div>
                        )}
                </section>
            </div>
        </div>
    )
}

export default TrackTally