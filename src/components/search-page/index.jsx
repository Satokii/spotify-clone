import SearchPageTopNav from "./components/SearchPageTopNav"
import SearchBar from "./components/SearchBar"
import SearchPageBrowse from "./components/SearchPageBrowse"

import './styles/search-page.css'

function SearchPage({ token, setToken }) {

    return (
        <div className="search-page--outer-container grid">
            <div className="scrollbar-search-page">
                <section className="search-page-container grid">
                    <SearchPageTopNav setToken={setToken} />
                    {/* <SearchBar token={token} /> */}
                    <SearchPageBrowse />
                </section>
            </div>
        </div>
    )
}

export default SearchPage