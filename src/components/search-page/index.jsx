import SearchPageTopNav from "./components/SearchPageTopNav"

import './styles/search-page.css'

function SearchPage({ setToken }) {

    return (
        <div className="search-page--outer-container grid">
            <div className="scrollbar-search-page">
                <section className="search-page-container grid">
                    <SearchPageTopNav setToken={setToken} />
                </section>
            </div>
        </div>
    )
}

export default SearchPage