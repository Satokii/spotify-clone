import NavList from './components/NavList'
import './styles/navigation.css'

function Navigation({ token }) {

    return (
        <section className="navigation-container">
            {token ? <NavList /> : null}
        </section>
    )
}

export default Navigation