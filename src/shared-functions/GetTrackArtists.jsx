const GetTrackArtists = (track) => {
    const numArtists = track.artists.length
    if (numArtists === 1) return <div id={track.artists[0].id} className="album-page--artist-name">{track.artists[0].name}</div>
    else {
        const separated = track.artists.map((artist, index) => {
            if (index === numArtists - 1) return <div id={artist.id} className="album-page--artist-name">{artist.name}</div>
            else return <div id={artist.id} className="album-page--artist-name">{`${artist.name}, `}</div>
        })
    return separated
    } 
}

export default GetTrackArtists