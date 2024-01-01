import "../../styles/main-playback/main-playback.css"

function MainPlayback() {

    return (
        <section className="main-playback--container grid">
            <div className="main-playback--cur-playing-container">
                <h3>Currently Playing</h3>
            </div>
            <div>
                <h3>Queue</h3>
                <p>Up next:</p>
            </div>
        </section>
    )
}

export default MainPlayback