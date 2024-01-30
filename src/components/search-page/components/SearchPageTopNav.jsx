import SearchPageNavContent from "./SearchPageNavContent"

function SearchPageTopNav({ setToken }) {

    return (
        <div className="artist-page--menu-backing">
            <section className="artist-page--menu-container grid">
                <SearchPageNavContent setToken={setToken} />
            </section>
        </div>
    )
}

export default SearchPageTopNav