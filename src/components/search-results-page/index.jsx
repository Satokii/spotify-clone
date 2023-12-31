import "./styles/search-results-page.css"

function SearchResultsPage({ trackResults, trackTotal }) {

    console.log(trackTotal)
    
    return (
        <section className="search-results--container grid">
            <h2 className="search-results--header">Search Results</h2>
            <article className="search-results--content grid">
                <div className="search-results--category-container grid">
                    <h3 className="search-results--category-subheader ">Tracks</h3>
                    <p className="search-results--category-num-results">{`(Total results: ${trackTotal})`}</p>
                    <ul className="search-results--category-list grid">
                        {trackResults.map((track, index) =>
                            <li className="search-results--category-item grid" key={`${track.id}-${index}`}>
                                <p>{track.total}</p>
                                <p>{track.name}</p>
                                <p>{track.artists[0].name}</p>
                                <img src={track.album.images[0].url} alt={`${track.name} image`} />
                                <p>{`Released: ${track.album.release_date}`}</p>
                            </li>
                        )}
                    </ul>
                </div>
            </article>
        </section>
    )
}

export default SearchResultsPage