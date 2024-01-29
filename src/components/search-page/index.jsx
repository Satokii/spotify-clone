import SearchPageTopNav from "./components/SearchPageTopNav"
import SearchBar from "./components/SearchBar"

import './styles/search-page.css'

function SearchPage({ token, setToken }) {

    return (
        <div className="search-page--outer-container grid">
            <div className="scrollbar-search-page">
                <section className="search-page-container grid">
                    <SearchPageTopNav setToken={setToken} />
                    <SearchBar token={token} />
                </section>
            </div>
        </div>
    )
}

export default SearchPage