const fixPlaylistTrackName = (string) => {
    if (string.length > 43) {
        return `${string.slice(0, 43)}...`
    }
    else return string
}

export default fixPlaylistTrackName