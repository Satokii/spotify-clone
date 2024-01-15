const fixLengthNowPlaying = (string) => {
    if (string.length > 21) {
        return `${string.slice(0, 21)}...`
    }
    else return string
}

export default fixLengthNowPlaying