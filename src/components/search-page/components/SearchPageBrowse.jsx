import '../styles/search-page-browse.css'

function SearchPageBrowse() {

    const genres = [
        {
            genre: "pop",
            title: "Pop"
        },
        {
            genre: "mood",
            title: "Mood"
        },
        {
            genre: "hiphop",
            title: "Hip-Hop"
        },
        {
            genre: "party",
            title: "Party"
        },
        {
            genre: "",
            title: "Dance/Electronic"
        },
        {
            genre: "workout",
            title: "Workout"
        },
        {
            genre: "",
            title: "Equal"
        },
        {
            genre: "",
            title: "In the car"
        },
        {
            genre: "",
            title: "Alternative"
        },
        {
            genre: "",
            title: "Frequency"
        },
        {
            genre: "indie",
            title: "Indie"
        },
        {
            genre: "rock",
            title: "Rock"
        },
        {
            genre: "0JQ5DAqbMKFEZPnFQSFB1T",
            title: "R&B"
        },
        {
            genre: "throwback",
            title: "Throwback"
        },
        {
            genre: "",
            title: "Disney"
        },
        {
            genre: "",
            title: "Radar"
        },
        {
            genre: "",
            title: "Country"
        },
        {
            genre: "kpop",
            title: "K-Pop"
        },
        {
            genre: "",
            title: "Chill"
        },
        {
            genre: "",
            title: "Sleep"
        },
        {
            genre: "jazz",
            title: "Jazz"
        },
        {
            genre: "classical",
            title: "Classical"
        },
        {
            genre: "anime",
            title: "Anime"
        },
        {
            genre: "",
            title: "Metal"
        },
        
    ]

    return (
        <div className='search-page-browse--container grid'>
            <h2 className='search-page-browse--header'>Browse all</h2>
            <section className='search-page-browse--genre-container grid'>
                {genres.map((genre, index) => (
                    <div key={`${genre.title}-${index}`}>{genre.title}</div>
                ))}
            </section>
        </div>
    )
}

export default SearchPageBrowse