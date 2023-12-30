import { useState } from "react";
import TopTracksPreview from "./components/TopTracksPreview";
import TopTracksPview6Mths from "./components/TopTracksPview6Mths";
import TopTracksPview4Wks from "./components/TopTracksPview4Wks";
import TopArtistsPreview from "./components/TopArtistsPreview";
import TopArtistsPview6mths from "./components/TopArtistsPview6Mths";
import TopArtistsPview4Wks from "./components/TopArtistsPview4Wks";
import RecentlyPlayed from "./components/RecentlyPlayed";
import "./styles/main.css";
import "./styles/main-date-filter.css"
import "./styles/main-preview-styles.css"
import "./styles/main-recently-played.css"

function Main({ token }) {

  // HANDLE TOP TRACKS DATE RANGE
  const TRACKS_INITIAL_STATE = [
    {
      name: 'ALL TIME',
      className: 'active-date-filter',
      click: 'long'
    },
    {
      name: 'LAST 6 MONTHS',
      className: 'inactive-date-filter',
      click: 'medium'
    },
    {
      name: 'LAST 4 WEEKS',
      className: 'inactive-date-filter',
      click: 'short'
    }
  ];

  const [showTopTracks, setShowTopTracks] = useState('long')
  const [topTracksDate, setTopTracksDate] = useState(TRACKS_INITIAL_STATE);

  const toggleTopTracksDate = (selectedDate) => {
    const updatedTopTracks = topTracksDate.map(date => {
      if (date.name === selectedDate.target.innerText) {
        return {...date, className: 'active-date-filter'}
      }
      else {
        return {...date, className:'inactive-date-filter'}
      }
    })
    setTopTracksDate(updatedTopTracks)
  }

  const toggleTopTracks = () => {
    if (showTopTracks === "long") return <TopTracksPreview token={token} />;
    else if (showTopTracks === "medium")
      return <TopTracksPview6Mths token={token} />;
    else if (showTopTracks === "short") return <TopTracksPview4Wks token={token} />;
  };

  // HANDLE TOP ARTISTS DATE RANGE
  const ARTISTS_INITIAL_STATE = [
    {
      name: 'ALL TIME',
      className: 'active-date-filter',
      click: 'long'
    },
    {
      name: 'LAST 6 MONTHS',
      className: 'inactive-date-filter',
      click: 'medium'
    },
    {
      name: 'LAST 4 WEEKS',
      className: 'inactive-date-filter',
      click: 'short'
    }
  ];
  
  const [showTopArtists, setShowTopArtists] = useState('long')
  const [topArtistsDate, setTopArtistsDate] = useState(ARTISTS_INITIAL_STATE);

  const toggleTopArtistsDate = (selectedDate) => {
    const updatedTopArtists = topArtistsDate.map(date => {
      if (date.name === selectedDate.target.innerText) {
        return {...date, className: 'active-date-filter'}
      }
      else {
        return {...date, className:'inactive-date-filter'}
      }
    })
    setTopArtistsDate(updatedTopArtists)
  }

  const toggleTopArtists = () => {
    if (showTopArtists === "long") return <TopArtistsPreview token={token} />;
    else if (showTopArtists === "medium")
      return <TopArtistsPview6mths token={token} />;
    else if (showTopArtists === "short")
      return <TopArtistsPview4Wks token={token} />;
  };

  return (
    <main className="main grid">
      <section className="top-tracks--container grid">
        <h3 className="top-tracks--header">Top Tracks Preview</h3>
          <ul className="date-filter-list grid">
            {topTracksDate.map((dateFilter, index) => 
              <li
                key={`${dateFilter.title}-${index}`}
                className={dateFilter.className}
                onClick={e => {
                  toggleTopTracksDate(e)
                  setShowTopTracks(dateFilter.click)
                }}
              >
                {dateFilter.name}
              </li>
            )}
          </ul>
        {toggleTopTracks()}
      </section>
      <section className="top-artists--container grid">
        <h2 className="top-artists--header">Top Artists Preview</h2>
          <ul className="date-filter-list grid">
            {topArtistsDate.map((dateFilter, index) => 
              <li
                key={`${dateFilter.title}-${index}`}
                className={dateFilter.className}
                onClick={e => {
                  toggleTopArtistsDate(e)
                  setShowTopArtists(dateFilter.click)
                }}
              >
                {dateFilter.name}
              </li>
            )}
          </ul>
        {toggleTopArtists()}
      </section>
      <RecentlyPlayed token={token} />
    </main>
  );
}

export default Main;
