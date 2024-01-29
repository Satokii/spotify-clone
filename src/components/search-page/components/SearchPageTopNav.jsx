import MainNav from "../../main-nav"

function SearchPageTopNav({ setToken }) {

    return (
        <div className="artist-page--menu-backing">
            <section className="artist-page--menu-container grid">
                <MainNav setToken={setToken} />
            </section>
        </div>
    )
}

export default SearchPageTopNav