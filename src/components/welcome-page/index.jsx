import Authorisation from "../../Authorisation"
import './styles/welcome-page.css'

function WelcomePage() {

    return (
        <section className="welcome-page--container grid">
            <div className="welcome-page--text-container grid">
                <h2 className="welcome-page--header">Welcome to Spoti-facts</h2>
                <div className="welcome-page--text">
                    <p className="welcome-page--logged-out-text">You are currently logged out</p>
                    <p>Please <span className="welcome-page--login-link"><Authorisation /></span> to continue</p>
                </div>
            </div>
        </section>
    )
}

export default WelcomePage