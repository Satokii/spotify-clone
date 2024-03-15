import MainNav from "../../main-nav"

import "../styles/track-tally-top-nav.css"

function TrackTallyTopNav({ setToken }) {

    return (
        <div className="track-tally--menu-backing">
        <section className="track-tally--menu-container grid">
            <MainNav setToken={setToken} />
        </section>
        </div>
    )
}
export default TrackTallyTopNav