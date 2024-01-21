import UserPlaylistTopNav from "./components/UserPlaylistTopNav"

import "./styles/user-playlist.css"

function UserPlaylist({ token, setToken }) {

    return (
        <div className="scrollbar-user-playlist">
        <section className="user-playlist--container grid">
            <UserPlaylistTopNav setToken={setToken} />
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