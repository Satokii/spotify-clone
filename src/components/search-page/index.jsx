import SearchPageTopNav from "./components/SearchPageTopNav"
import SearchPageBrowse from "./components/SearchPageBrowse"

import './styles/search-page.css'

function SearchPage({ token, setToken }) {

    return (
        <div className="search-page--outer-container grid">
            <div className="scrollbar-search-page">
                <section className="search-page-container grid">
                    <SearchPageTopNav token={token} setToken={setToken} />
                    <SearchPageBrowse />
                </section>
            </div>
        </div>
    )
}

export default SearchPage