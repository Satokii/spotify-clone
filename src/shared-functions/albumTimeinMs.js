const albumTimeinMs = (tracksArray) => {
    const trackTimesArr = tracksArray.map(track => {
        return track.duration_ms
    })
    const sum = trackTimesArr.reduce((acc, curr) => acc + curr, 0)
    return sum
}

  export default albumTimeinMs