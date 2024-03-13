import { genres } from '../genres.js'
import '../styles/search-page-browse.css'

function SearchPageBrowse() {

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