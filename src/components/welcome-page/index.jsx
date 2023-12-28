import Authorisation from "../../Authorisation"

function WelcomePage() {

    return (
        <section>
            <h2>Welcome to My Spotify Stats</h2>
            <p>Please <Authorisation /> to continue</p>
        </section>
    )
}

export default WelcomePage