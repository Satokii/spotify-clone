import Authorisation from "../../Authorisation"
import './styles/welcome-page.css'

function WelcomePage() {

    return (
        <section className="welcome-page-container grid">
            <div className="grid">
                <h2>Welcome to My Spotify Stats</h2>
                <p>Please <Authorisation /> to continue</p>
            </div>
        </section>
    )
}

export default WelcomePage