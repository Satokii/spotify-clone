import { genres } from '../genres.js'
import '../styles/search-page-browse.css'

function SearchPageBrowse() {

    return (
        <div className='search-page-browse--container grid'>
            <h2 className='search-page-browse--header'>Browse all</h2>
            <section className='search-page-browse--genre-container grid'>
                {genres.map((genre, index) => (
                    <div className='browse--genre-item' key={`${genre.title}-${index}`} style={{ backgroundColor: genre.background}}>
                        <h3 className='browse--genre-item-header'>{genre.title}</h3>
                        <img className='browse--genre-item-img' src="https://i.scdn.co/image/ab67fb8200005cafa862ab80dd85682b37c4e768" alt={`${genre.genre}-img`} />
                    </div>
                ))}
            </section>
        </div>
    )
}

export default SearchPageBrowse