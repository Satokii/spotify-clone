import "./styles/user-playlist.css"

function UserPlaylist() {

    return (
        <div className="scrollbar-user-playlist">
        <section className="user-playlist--container grid">
            <div>top nav</div>
            <div>banner</div>
            <div className="user-playlist--sub-container grid">
                <div>controls</div>
                <div>tracks</div>
            </div>
        </section>
        </div>
    )
}

export default UserPlaylist