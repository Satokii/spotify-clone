import './styles/header.css'

function Header() {

    return (
        <header className="header grid">
            <section className="logo-container">My Spotify Stats</section>
            <section className="profile-container">Profile</section>
            <section className="login-container">Login/Logout</section>
        </header>
    )
}

export default Header