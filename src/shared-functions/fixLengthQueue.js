const fixLengthQueue = (string) => {
    if (string.length > 13) {
        return `${string.slice(0, 13)}...`
    }
    else return string
}

export default fixLengthQueue