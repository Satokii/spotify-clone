const fixLengthSearch = (string) => {
    if (string.length > 25) {
        return `${string.slice(0, 26)}...`
    }
    else return string
}

export default fixLengthSearch