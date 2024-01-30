import SearchPageNavContent from "./SearchPageNavContent"

function SearchPageTopNav({ setToken }) {

    return (
        <div className="search-page--menu-backing">
            <section className="search-page--menu-container grid">
                <SearchPageNavContent setToken={setToken} />
            </section>
        </div>
    )
}

export default SearchPageTopNav