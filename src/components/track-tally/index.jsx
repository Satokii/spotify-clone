import { useEffect, useState } from "react"
import axios from "axios"
import TrackTallyTopNav from "./components/TrackTallyTopNav"
import './styles/track-tally.css'

function TrackTally({ setToken }) {

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

    return (
        <div className="track-tally--outer-container grid">
            <div className="track-tally--scrollbar">
                <section className="track-tally--container grid">
                    <TrackTallyTopNav setToken={setToken} />
                    <div className="track-tally--sub-container grid">
                        <h2>What you've been listening to</h2>
                        <div className="track-tally--all-tracks grid">
                            <div className="track-tally--track-headers grid">
                                <p>Track</p>
                                <p>Number of Plays</p>
                            </div>
                            {tracks.map((track, index) => 
                                <div className="track-tally--track grid" key={`${track.id}-${index}`}>
                                    <p>{track.track_name}</p>
                                    <p>{track.tally}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default TrackTally