import "../../styles/main-playback/currently-playing-header.css"

function CurrentlyPlayingHeader({ isPlaying }) {

    return (
        <div className="main-playback--cur-playing-header-container grid">
            <h3 className="main-playback--cur-playing-header">Currently playing</h3>
            {isPlaying ? 
            <div className="bars grid">
                <div className="bars__item"></div>
                <div className="bars__item"></div>
                <div className="bars__item"></div>
                <div className="bars__item"></div>
            </div> :
            <div className="empty-bars grid">
                <div className="empty-bars__item"></div>
                <div className="empty-bars__item"></div>
                <div className="empty-bars__item"></div>
                <div className="empty-bars__item"></div>
            </div>
                } 
        </div>
    )
}

export default CurrentlyPlayingHeader