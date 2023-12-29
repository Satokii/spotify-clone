import { useState } from "react";
import axios from "axios";
import TopTracksPreview from "./components/TopTracksPreview";
import TopTracksPview6Mths from "./components/TopTracksPview6Mths";
import TopTracksPview4Wks from "./components/TopTracksPview4Wks";
import TopArtistsPreview from "./components/TopArtistsPreview";
import TopArtistsPview6mths from "./components/TopArtistsPview6Mths";
import TopArtistsPview4Wks from "./components/TopArtistsPview4Wks";
import RecentlyPlayed from "./components/RecentlyPlayed";
import './styles/main.css'

function Main({ token }) {

    const [topTracks, setTopTracks] = useState([]);
    const [recentlyPlayed, setRecentlyPlayed] = useState([]);
    const [playCount, setPlayCount] = useState([]);

    return (
        <main className="main grid">
            <TopTracksPreview token={token} />
            <TopTracksPview6Mths token={token} />
            <TopTracksPview4Wks token={token} />
            <TopArtistsPreview token={token} />
            <TopArtistsPview6mths token={token} />
            <TopArtistsPview4Wks token={token} />
            <RecentlyPlayed token={token} />
          {/* <div>
            <button onClick={getTopTracks}>Get Top Tracks</button>
            {renderTopTracks()}
          </div>
          <div>
            <button onClick={getRecentlyPlayed}>Get Recently Played</button>
            {renderRecentlyPlayed()}
          </div>
          <div>
            <button onClick={calcTimesPlayed}>Times played</button>
            {renderPlayCount()}
          </div> */}
        </main>
    )
}

export default Main