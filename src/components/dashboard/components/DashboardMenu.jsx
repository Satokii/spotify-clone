import { useNavigate } from "react-router-dom"
import BackArrow from "../../../assets/svgs/main-app/back-arrow.svg"
import ForwardArrow from "../../../assets/svgs/main-app/forward-arrow.svg"

import "../styles/dashboard-menu.css"

function DashboardMenu() {

    const navigate = useNavigate()

    const pageBack = () => {
        navigate(-1)
    }

    const pageForward = () => {
        navigate(1)
    }

    return (
        <section className="dashboard--menu grid">
            <div className="main-page-nav-container grid">
                <img className="main-page-nav--back-arrow" src={BackArrow} alt="" onClick={pageBack} />
                <img className="main-page-nav--forward-arrow" src={ForwardArrow} alt="" onClick={pageForward} />
            </div>
            <div></div>
        </section>
    )
}

export default DashboardMenu