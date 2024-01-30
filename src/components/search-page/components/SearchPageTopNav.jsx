import SearchPageNavContent from "./SearchPageNavContent"

import "../styles/search-page-top-nav.css"

function SearchPageTopNav({ token, setToken }) {

    return (
        <div className="search-page--menu-backing">
            <section className="search-page--menu-container grid">
                <SearchPageNavContent token={token} setToken={setToken} />
            </section>
        </div>
    )
}

export default SearchPageTopNav